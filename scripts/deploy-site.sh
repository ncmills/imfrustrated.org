#!/bin/bash
# Thin wrapper; all logic lives in deploy-site.py (standalone, stdlib only). See DEPLOY-SITE.md.
exec python3 "$(dirname "$0")/deploy-site.py" "$@"
