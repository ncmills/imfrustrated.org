#!/bin/bash
# Thin wrapper; all logic lives in deploy-site.py (standalone, stdlib only). See DEPLOY-SITE.md.
export DEPLOY_SITE_OPSCTL="${DEPLOY_SITE_OPSCTL:-$HOME/second-nick/ops/opsctl.py}"
exec python3 "$(dirname "$0")/deploy-site.py" "$@"
