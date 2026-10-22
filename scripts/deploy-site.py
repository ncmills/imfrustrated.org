#!/usr/bin/env python3
"""ops/deploy_site.py -- deploy a Vercel SITE project from git, verify health, auto-rollback.

STANDALONE (OPS-REDESIGN-AMEND-1): stdlib only. NO import from second-nick (no claude_run,
no ops_db, no daemons/). Must work with every com.secondnick.* job unloaded and ~/second-nick
absent. opsctl is OPTIONAL: if --item is given AND ~/second-nick/ops/opsctl.py exists, it is
called; otherwise the evidence/note line is printed and the run continues.

Sites deploy from git: a merge to the default branch makes Vercel build production. This tool
does NOT push or merge. Control merges; then runs this to watch, verify and roll back.

Usage:
  deploy_site.py <vercel-project> --sha <merged-sha>
                 [--item OPS-xxxxx] [--dry-run] [--health /path ...]
                 [--repo PATH] [--domain DOMAIN] [--allow-project NAME] [--drill]

Exit codes:
  0  DEPLOYED / dry-run plan printed / drill succeeded
  1  build failed (production never moved) / drill health failure / unexpected error
  4  refused (guard)
  5  timeout waiting for the deployment
  6  rolled back (health failure after deploy)

All `vercel` calls go through run_vercel(), which shells out to $VERCEL_BIN (default "vercel").
Tests point VERCEL_BIN at a fake script driven by a JSON state file. All HTTP calls go through
the module-level http_get() seam; tests monkeypatch that name directly (injected fetch).
Never reads a Vercel token file -- the CLI handles auth.
"""
import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone

TEAM_ID = "team_N4rxzprlVDfiZMqq5L6Zyj1P"
SCOPE = "ncmillsionaire"
DEFAULT_CANARY = "imfrustrated.org"

# Hard-excluded project names (exact match). "hub" is matched as a substring separately.
HARD_EXCLUDED = {"indiamoon", "hub-cards", "qualify-ai-platform"}

FORBIDDEN_DIR_PREFIXES = ("migrations/", "supabase/", "prisma/")

EXIT_OK = 0
EXIT_BUILD_FAILED = 1
EXIT_ERROR = 1
EXIT_REFUSED = 4
EXIT_TIMEOUT = 5
EXIT_ROLLED_BACK = 6


# ── small utilities ─────────────────────────────────────────────────────────────────────

def utc_ts():
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def sha7(sha):
    return (sha or "")[:7]


def log_dir():
    return os.path.expanduser(os.environ.get("DEPLOY_SITE_LOG_DIR") or "~/ops/logs/deploy-site")


def backup_path(project, directory=None):
    d = directory if directory is not None else log_dir()
    os.makedirs(d, exist_ok=True)
    return os.path.join(d, f"{project}-{utc_ts()}.json")


def write_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2, sort_keys=True)
        f.write("\n")


# ── vercel CLI seam ──────────────────────────────────────────────────────────────────────

def vercel_bin():
    return os.environ.get("VERCEL_BIN", "vercel")


def run_vercel(args, timeout=30):
    """Run the vercel CLI. Returns (rc, stdout, stderr). Never raises for a nonzero exit."""
    try:
        p = subprocess.run([vercel_bin()] + list(args), capture_output=True, text=True,
                            timeout=timeout)
        return p.returncode, p.stdout, p.stderr
    except Exception as e:  # noqa: BLE001 - deliberately broad, this is a shell-out seam
        return 1, "", str(e)


def vercel_api_get(path):
    """GET a vercel api path. Raises RuntimeError on nonzero exit or bad JSON."""
    rc, out, err = run_vercel(["api", path])
    if rc != 0:
        raise RuntimeError(f"vercel api failed ({rc}): {err or out}")
    try:
        return json.loads(out)
    except Exception as e:
        raise RuntimeError(f"vercel api returned non-JSON: {out!r}") from e


def deployments_path(project):
    return (f"/v6/deployments?projectId={project}&teamId={TEAM_ID}"
            f"&target=production&limit=5")


def extract_deployment(d):
    if not d:
        return None
    meta = d.get("meta") or {}
    return {
        "id": d.get("uid") or d.get("id"),
        "url": d.get("url"),
        "sha": meta.get("githubCommitSha"),
        "createdAt": d.get("createdAt") or d.get("created"),
        "state": d.get("state") or d.get("readyState"),
    }


# ── HTTP seam (injected fetch) ───────────────────────────────────────────────────────────

def http_get(url, timeout=20):
    """GET url. Returns (status, headers_dict, body_str). Never raises -- status 0 means the
    request itself failed (DNS, connect, timeout, ...)."""
    req = urllib.request.Request(url, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read().decode("utf-8", "replace")
            return resp.status, dict(resp.headers), body
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace") if e.fp else ""
        return e.code, dict(e.headers or {}), body
    except Exception as e:  # noqa: BLE001
        return 0, {}, str(e)


def extract_title(body):
    m = re.search(r"<title[^>]*>(.*?)</title>", body or "", re.IGNORECASE | re.DOTALL)
    return m.group(1).strip() if m else None


def has_vercel_id_header(headers):
    return any(k.lower() == "x-vercel-id" for k in (headers or {}))


# ── git seam (local only, never a network write) ────────────────────────────────────────

def run_git(repo_dir, args, timeout=30):
    try:
        p = subprocess.run(["git", "-C", repo_dir] + list(args), capture_output=True,
                            text=True, timeout=timeout)
        return p.returncode, p.stdout, p.stderr
    except Exception as e:  # noqa: BLE001
        return 1, "", str(e)


def default_branch(repo_dir):
    rc, out, _ = run_git(repo_dir, ["symbolic-ref", "refs/remotes/origin/HEAD"])
    if rc == 0 and out.strip():
        return out.strip().rsplit("/", 1)[-1]
    for name in ("main", "master"):
        rc, _, _ = run_git(repo_dir, ["rev-parse", "--verify", f"origin/{name}"])
        if rc == 0:
            return name
    return "main"


def sha_on_default_branch(repo_dir, sha):
    branch = default_branch(repo_dir)
    rc, _, _ = run_git(repo_dir, ["merge-base", "--is-ancestor", sha, f"origin/{branch}"])
    return rc == 0, branch


def diff_forbidden_paths(repo_dir, prod_sha, sha):
    """Returns the list of changed paths that match the forbidden set, or None if the diff
    itself could not be computed (caller must refuse in that case too)."""
    rc, out, _ = run_git(repo_dir, ["diff", "--name-only", f"{prod_sha}..{sha}"])
    if rc != 0:
        return None
    hits = []
    for p in out.splitlines():
        if not p:
            continue
        pl = p.lower()
        base = os.path.basename(pl)
        if any(pl.startswith(pref) or f"/{pref}" in pl for pref in FORBIDDEN_DIR_PREFIXES):
            hits.append(p)
            continue
        if re.search(r"(^|/)schema", pl):
            hits.append(p)
            continue
        if base.startswith(".env"):
            hits.append(p)
            continue
        if base == "vercel.json":
            hits.append(p)
            continue
    return hits


# ── registry fallback (optional) ────────────────────────────────────────────────────────

def load_registry_row(project):
    path = os.path.expanduser(
        os.environ.get("DEPLOY_SITE_REGISTRY") or "~/ops/dashboard/registry.json")
    if not os.path.isfile(path):
        return None
    try:
        data = json.load(open(path))
    except Exception:
        return None
    for row in data.get("rows", []):
        if row.get("vercel") == project:
            return row
    return None


def resolve_repo_domain(project, repo_arg, domain_arg):
    row = load_registry_row(project) if (repo_arg is None or domain_arg is None) else None
    repo = os.path.expanduser(repo_arg) if repo_arg else (row.get("repo") if row else None)
    if repo:
        repo = os.path.expanduser(repo)
    domain = domain_arg or (row.get("domain") if row else None)
    return repo, domain


# ── refusal checks (step 1) ─────────────────────────────────────────────────────────────

def hard_excluded_reason(project):
    if project in HARD_EXCLUDED:
        return f"{project} is excluded from auto-deploy"
    if "hub" in project.lower():
        return f"{project} contains 'hub' (Hub is gated on the rollback drill, not auto-deploy)"
    return None


def canary_reason(project, allow_project):
    if project == DEFAULT_CANARY:
        return None
    if allow_project and allow_project == project:
        return None
    return (f"canary-only ({DEFAULT_CANARY}); pass --allow-project {project} to widen "
            f"(one canary until control widens it)")


# ── opsctl (optional) ────────────────────────────────────────────────────────────────────

def opsctl_path():
    return os.path.expanduser(
        os.environ.get("DEPLOY_SITE_OPSCTL") or "~/second-nick/ops/opsctl.py")


def call_opsctl_evidence(item, domain):
    path = opsctl_path()
    if not os.path.isfile(path):
        return False
    subprocess.run([sys.executable, path, "evidence", item, "--health-url", f"https://{domain}/"],
                    capture_output=True, text=True)
    return True


def call_opsctl_note(item, text):
    path = opsctl_path()
    if not os.path.isfile(path):
        return False
    subprocess.run([sys.executable, path, "note", item, text], capture_output=True, text=True)
    return True


def report_evidence(item, domain, outcome_text):
    """Step 6: evidence on success, note in both outcomes. opsctl optional."""
    if not item:
        return
    did_evidence = False
    if outcome_text.startswith("DEPLOYED") and domain:
        did_evidence = call_opsctl_evidence(item, domain)
        if not did_evidence:
            print(f"evidence (no opsctl): {item} https://{domain}/")
    did_note = call_opsctl_note(item, outcome_text)
    if not did_note:
        print(f"note (no opsctl): {item} {outcome_text}")


# ── WAIT (step 3) ────────────────────────────────────────────────────────────────────────

def poll_interval():
    return float(os.environ.get("DEPLOY_SITE_POLL_INTERVAL", "15"))


def poll_timeout():
    return float(os.environ.get("DEPLOY_SITE_POLL_TIMEOUT", "1200"))


def wait_for_deployment(project, sha, interval=None, timeout=None, sleep_fn=time.sleep,
                         clock_fn=time.monotonic):
    interval = poll_interval() if interval is None else interval
    timeout = poll_timeout() if timeout is None else timeout
    start = clock_fn()
    while True:
        resp = vercel_api_get(deployments_path(project))
        for d in resp.get("deployments", []):
            meta = d.get("meta") or {}
            if meta.get("githubCommitSha") == sha:
                state = d.get("state") or d.get("readyState")
                if state == "READY":
                    return "READY", extract_deployment(d)
                if state in ("ERROR", "CANCELED"):
                    return state, extract_deployment(d)
                # BUILDING / QUEUED / INITIALIZING -> keep polling
        if clock_fn() - start >= timeout:
            return "TIMEOUT", None
        sleep_fn(interval)


# ── HEALTH (step 4) ──────────────────────────────────────────────────────────────────────

def check_health(domain, paths, timeout=20):
    """Check `/` plus every extra path on domain. Returns (ok, results)."""
    results = []
    ok = True
    for p in ["/"] + list(paths or []):
        url = f"https://{domain}{p}"
        status, headers, _ = http_get(url, timeout)
        header_ok = has_vercel_id_header(headers)
        good = (status == 200 and header_ok)
        results.append({"path": p, "status": status, "x_vercel_id": header_ok, "ok": good})
        if not good:
            ok = False
    return ok, results


def title_sanity_check(domain, new_deployment_url, timeout=20):
    """Cheap sanity cross-check -- record, never fail on it alone."""
    info = {"domain_title": None, "new_title": None, "match": None}
    try:
        _, _, domain_body = http_get(f"https://{domain}/", timeout)
        info["domain_title"] = extract_title(domain_body)
    except Exception:
        pass
    if new_deployment_url:
        try:
            _, _, new_body = http_get(f"https://{new_deployment_url}/", timeout)
            info["new_title"] = extract_title(new_body)
        except Exception:
            pass
    if info["domain_title"] and info["new_title"]:
        info["match"] = (info["domain_title"] == info["new_title"])
    return info


# ── ROLLBACK (step 5) ───────────────────────────────────────────────────────────────────

def do_rollback(backup_url):
    rc, out, err = run_vercel(["rollback", backup_url, "--scope", SCOPE, "--yes"])
    return rc == 0, out, err


def do_promote(deployment_url):
    rc, out, err = run_vercel(["promote", deployment_url, "--scope", SCOPE, "--yes"])
    return rc == 0, out, err


# ── CLI ─────────────────────────────────────────────────────────────────────────────────

def build_parser():
    p = argparse.ArgumentParser(prog="deploy_site.py")
    p.add_argument("project")
    p.add_argument("--sha")
    p.add_argument("--item")
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--health", action="append", default=[])
    p.add_argument("--repo")
    p.add_argument("--domain")
    p.add_argument("--allow-project")
    p.add_argument("--drill", action="store_true")
    return p


def refuse(project, reason, printer=print):
    printer(f"REFUSED {project} {reason}")
    return EXIT_REFUSED


def main(argv=None, printer=print):
    args = build_parser().parse_args(argv)
    project = args.project

    reason = hard_excluded_reason(project)
    if reason:
        return refuse(project, reason, printer)

    reason = canary_reason(project, args.allow_project)
    if reason:
        return refuse(project, reason, printer)

    repo, domain = resolve_repo_domain(project, args.repo, args.domain)
    if not repo:
        return refuse(project, f"unknown project (no repo resolvable for {project})", printer)
    if not domain:
        return refuse(project, f"unknown project (no domain resolvable for {project})", printer)
    if not os.path.isdir(repo):
        return refuse(project, f"repo not found: {repo}", printer)

    if args.drill:
        return run_drill(project, domain, args, printer)

    if not args.sha:
        return refuse(project, "--sha is required (unless --drill)", printer)
    sha = args.sha

    on_branch, branch = sha_on_default_branch(repo, sha)
    if not on_branch:
        return refuse(project, f"sha {sha7(sha)} is not on origin/{branch}", printer)

    # step 2: BACKUP -- before anything else that could mutate state.
    try:
        resp = vercel_api_get(deployments_path(project))
    except Exception as e:
        return refuse(project, f"could not reach vercel api: {e}", printer)
    deployments = [extract_deployment(d) for d in resp.get("deployments", [])]
    # The merge has usually ALREADY triggered a production build of `sha`, so the newest
    # deployment is often the new one. The rollback target is the newest READY production
    # deployment of a DIFFERENT sha -- never the deployment being verified.
    backup = next((d for d in deployments
                   if d and d.get("state") == "READY" and d.get("sha") and d["sha"] != sha), None)
    bpath = backup_path(project)
    write_json(bpath, {"project": project, "backup": backup, "requested_sha": sha,
                        "written_at": utc_ts()})

    prod_sha = backup.get("sha") if backup else None
    if not prod_sha:
        return refuse(project, "current production sha is unknown; refusing migrations guard",
                       printer)
    hits = diff_forbidden_paths(repo, prod_sha, sha)
    if hits is None:
        return refuse(project, f"could not diff {sha7(prod_sha)}..{sha7(sha)}", printer)
    if hits:
        return refuse(project, f"diff touches guarded path(s): {', '.join(hits[:5])}", printer)

    if args.dry_run:
        printer(f"PLAN {project} sha={sha7(sha)} backup={backup} "
                f"domain={domain} health={['/'] + list(args.health)}")
        return EXIT_OK

    state, deployment = wait_for_deployment(project, sha)
    if state == "TIMEOUT":
        printer(f"TIMEOUT {project} {sha7(sha)} no deployment for sha")
        report_evidence(args.item, domain, f"TIMEOUT {project} {sha7(sha)} no deployment for sha")
        return EXIT_TIMEOUT
    if state in ("ERROR", "CANCELED"):
        outcome = f"BUILD-FAILED {project} {sha7(sha)} build {state}: production never moved"
        printer(outcome)
        report_evidence(args.item, domain, outcome)
        return EXIT_BUILD_FAILED

    # state == READY
    ok, results = check_health(domain, args.health)
    title_info = title_sanity_check(domain, deployment.get("url") if deployment else None)

    if ok:
        outcome = (f"DEPLOYED {project} {sha7(sha)} "
                   f"{deployment.get('id') if deployment else '?'} health ok")
        printer(outcome)
        report_evidence(args.item, domain, outcome)
        return EXIT_OK

    # ANY health failure -> AUTO-ROLLBACK to the BACKUP url, never the new one.
    backup_url = backup.get("url") if backup else None
    rb_ok, rb_out, rb_err = do_rollback(backup_url)
    rb_health_ok, rb_results = check_health(domain, args.health)
    write_json(bpath.replace(".json", "-rollback.json"), {
        "project": project, "backup": backup, "forward_health": results,
        "rollback_ok": rb_ok, "rollback_health": rb_results, "title_info": title_info,
    })
    outcome = (f"ROLLED-BACK {project} {sha7(sha)} rolled back to "
               f"{backup.get('id') if backup else '?'} "
               f"health={'ok' if rb_health_ok else 'failed'}")
    printer(outcome)
    report_evidence(args.item, domain, outcome)
    return EXIT_ROLLED_BACK


def run_drill(project, domain, args, printer):
    try:
        resp = vercel_api_get(deployments_path(project))
    except Exception as e:
        return refuse(project, f"could not reach vercel api: {e}", printer)
    deployments = [d for d in (extract_deployment(x) for x in resp.get("deployments", []))
                   if d and d.get("state") == "READY"]
    if len(deployments) < 2:
        return refuse(project, "drill needs at least 2 READY production deployments", printer)
    current, previous = deployments[0], deployments[1]
    bpath = backup_path(project)
    write_json(bpath, {"project": project, "drill": True, "current": current,
                        "previous": previous, "written_at": utc_ts()})

    t0 = time.monotonic()
    back_ok, _, _ = do_rollback(previous.get("url"))
    health_back, _ = check_health(domain, args.health)
    t1 = time.monotonic()
    fwd_ok, _, _ = do_promote(current.get("url"))
    health_fwd, _ = check_health(domain, args.health)
    t2 = time.monotonic()

    printer(f"DRILL {project} rollback={t1 - t0:.1f}s promote={t2 - t1:.1f}s "
            f"health_back={'ok' if (back_ok and health_back) else 'fail'} "
            f"health_fwd={'ok' if (fwd_ok and health_fwd) else 'fail'}")
    if back_ok and health_back and fwd_ok and health_fwd:
        return EXIT_OK
    return EXIT_ERROR


if __name__ == "__main__":
    sys.exit(main())
