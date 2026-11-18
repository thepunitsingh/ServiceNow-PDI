# ServiceNow PDI notes

Instance: https://dev469616.service-now.com (user `admin`). The older instance `dev181171` (user `claudecode`) is no longer used.

## Logging in
Never ask for the password before trying the login scripts:

    scripts/sn-login.sh                      # test login (exit 0 = OK)
    scripts/sn-login.sh get '<api path>'     # authenticated GET, e.g. '/api/now/table/sys_user?sysparm_limit=1'
    scripts/sn-login.sh set-pass             # store a new password (prompts, hidden)

On `dev469616` REST **basic auth is rejected (401) for `admin`** even though the password is right and the browser login works.
Use the browser-session helper instead (same credentials, needs Playwright, which is preinstalled in cloud sessions):

    node scripts/sn-browser.js get '<api path>' ['<api path>' ...]
    node scripts/sn-browser.js post '<api path>' '<json body>'
    node scripts/sn-browser.js patch '<api path>' '<json body>'

Credentials are read from, in order: env vars `SN_PASS` (and optionally `SN_USER`, `SN_INSTANCE`),
then `~/.config/servicenow-pdi/creds.env` (outside the repo, mode 600). No password is stored in this repo.
If a script reports 401 / "LOGIN FAILED", the password changed: ask the user to run `set-pass` or update the `SN_PASS` environment variable.
The instance often drops connections; the shell script retries. Prefer the REST API (`/api/now/table/...`, `/api/sn_cicd/...`) over driving the UI.

## Practice path
`docs/practice/` holds the 12-activity ITSM practice guide (README.md is the index; a Word/PDF copy sits beside it).
Its "Verify" commands use `scripts/sn-login.sh get`; on this instance run them with `node scripts/sn-browser.js get` instead.
Practice records are prefixed `PRAC` and live in the scoped app `PRAC ITSM Practice` (scope `x_2302068_prac_i_0`).
