# ServiceNow PDI notes

Instance: https://dev181171.service-now.com (user `claudecode`).

## Logging in
Never ask for the password before trying the login script:

    scripts/sn-login.sh                      # test login (exit 0 = OK)
    scripts/sn-login.sh get '<api path>'     # authenticated GET, e.g. '/api/now/table/sys_user?sysparm_limit=1'
    scripts/sn-login.sh set-pass             # store a new password (prompts, hidden)

Credentials are read from, in order: env vars `SN_PASS` (and optionally `SN_USER`, `SN_INSTANCE`),
then `~/.config/servicenow-pdi/creds.env` (outside the repo, mode 600). No password is stored in this repo.
If the script reports 401, the password changed: ask the user to run `set-pass` or update the `SN_PASS` environment variable.
The instance often drops connections; the script retries. Prefer the REST API (`/api/now/table/...`, `/api/sn_cicd/...`) over the browser.
