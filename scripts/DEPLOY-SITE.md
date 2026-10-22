# deploy-site: verify a production deploy, roll back on failure

A copy of `~/second-nick/ops/deploy_site.py` (OPS-REDESIGN step 5). It needs only Python 3 and
the Vercel CLI, and runs with every Second Nick job unloaded. Keep it byte-identical to the
Second Nick copy; a test there checks this.

It does not merge or push. Merging to `main` makes Vercel build production. After that, run:

    scripts/deploy-site.sh imfrustrated.org --sha <merged sha> --repo . --domain imfrustrated.org [--health /path ...] [--item OPS-xxxxx]

1. Refuses Hub, indiamoon, qualify-ai and every project except this canary.
2. Refuses a sha that is not on `origin/main`.
3. Refuses a diff since current production that touches `migrations/`, `supabase/`,
   `prisma/`, `schema`, `.env*` or `vercel.json`. Those changes are deployed by hand.
4. Records the rollback target in `~/ops/logs/deploy-site/<project>-<time>.json`: the newest
   READY production deployment of a *different* sha.
5. Waits for the production deployment of the sha.
   - Build ERROR: says "production never moved" and does not roll back.
6. Checks `/` and every `--health` path for HTTP 200 and an `x-vercel-id` header.
   - Any failure: `vercel rollback <backup>`, then checks health again.

Exit codes: 0 deployed, 1 build failed / error, 4 refused, 5 no deployment for the sha,
6 rolled back.

**After a rollback, Vercel stops auto-promoting new production builds** until someone runs
`vercel promote <url> --scope ncmillsionaire --yes` (or Undo Rollback in the dashboard).

`--drill` rolls production back to the previous READY deployment, checks it, and promotes the
current one again, timing both steps. Run it only with control's go. `--dry-run` prints the
plan and changes nothing.
