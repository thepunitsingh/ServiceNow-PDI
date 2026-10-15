#!/usr/bin/env bash
# Verify ServiceNow login and print how to call the API.
# Usage:  sn-login.sh            -> test login (exit 0 = OK)
#         sn-login.sh get <path> -> GET an API path using stored credentials, e.g. get '/api/now/table/sys_user?sysparm_limit=1'
#         sn-login.sh set-pass   -> update the stored password (prompts, input hidden)
# Credentials (never stored in the repo), first match wins:
#   1. env vars SN_INSTANCE / SN_USER / SN_PASS (e.g. set as environment variables in the cloud environment settings)
#   2. ~/.config/servicenow-pdi/creds.env (mode 600); override the path with SN_CREDS_FILE
set -u
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CREDS="${SN_CREDS_FILE:-${XDG_CONFIG_HOME:-$HOME/.config}/servicenow-pdi/creds.env}"
# Credential sources, first match wins: environment (SN_INSTANCE / SN_USER / SN_PASS), then creds.env.
# In a fresh cloud session set these as environment variables in the environment settings.
_ENV_PASS="${SN_PASS:-}"; _ENV_USER="${SN_USER:-}"; _ENV_INST="${SN_INSTANCE:-}"
# shellcheck disable=SC1090
[ -f "$CREDS" ] && source "$CREDS"
SN_PASS="${_ENV_PASS:-${SN_PASS:-}}"; SN_USER="${_ENV_USER:-${SN_USER:-claudecode}}"
SN_INSTANCE="${_ENV_INST:-${SN_INSTANCE:-https://dev181171.service-now.com}}"
[ -n "$SN_PASS" ] || { echo "No password: set SN_PASS in the environment, or run: $0 set-pass" >&2; exit 2; }

if [ "${1:-}" = "set-pass" ]; then
  read -r -s -p "New password for $SN_USER: " np; echo
  [ -n "$np" ] || { echo "Empty password, nothing changed" >&2; exit 2; }
  umask 077
  mkdir -p "$(dirname "$CREDS")"
  printf "SN_INSTANCE=%s\nSN_USER=%s\nSN_PASS=%q\n" "$SN_INSTANCE" "$SN_USER" "$np" > "$CREDS"
  chmod 600 "$CREDS"; echo "Saved."; exit 0
fi

api() {  # retries because the PDI drops connections often
  local out i
  for i in 1 2 3 4 5; do
    out=$(curl -sS -m 45 -u "$SN_USER:$SN_PASS" -H 'Accept: application/json' -w '\n%{http_code}' "$SN_INSTANCE$1" 2>/dev/null) && { printf '%s' "$out"; return 0; }
    sleep 4
  done
  return 1
}

if [ "${1:-}" = "get" ]; then
  out=$(api "${2:?path required}") || { echo "Instance unreachable" >&2; exit 3; }
  printf '%s\n' "${out%$'\n'*}"; exit 0
fi

out=$(api "/api/now/table/sys_user?sysparm_limit=1&sysparm_query=user_name=$SN_USER&sysparm_fields=user_name,active,locked_out") \
  || { echo "UNREACHABLE: $SN_INSTANCE did not respond (instance asleep or network issue)" >&2; exit 3; }
code="${out##*$'\n'}"
case "$code" in
  200) echo "LOGIN OK  user=$SN_USER  instance=$SN_INSTANCE"; exit 0 ;;
  401) echo "LOGIN FAILED (401): wrong/changed password for $SN_USER. Run: $0 set-pass" >&2; exit 1 ;;
  403) echo "LOGIN OK but forbidden (403): user lacks access to this API" >&2; exit 1 ;;
  *)   echo "Unexpected HTTP $code" >&2; exit 4 ;;
esac
