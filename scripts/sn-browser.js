#!/usr/bin/env node
// Authenticated ServiceNow REST calls through a headless-browser login.
// Use when basic auth is rejected (401) but the browser login works (e.g. fresh PDI admin accounts).
//
// Usage:
//   node scripts/sn-browser.js get   '/api/now/table/sys_scope?sysparm_limit=1'  [more paths...]
//   node scripts/sn-browser.js post  '/api/now/table/incident' '{"short_description":"PRAC test"}'
//   node scripts/sn-browser.js patch '/api/now/table/incident/<sys_id>' '{"state":"2"}'
//
// Credentials (never stored in the repo), first match wins: env vars SN_INSTANCE / SN_USER / SN_PASS,
// then ~/.config/servicenow-pdi/creds.env (override with SN_CREDS_FILE). Same sources as sn-login.sh.
const fs = require('fs');
const os = require('os');
const path = require('path');

function loadPlaywright() {
  try { return require('playwright'); } catch (_) {}
  const root = require('child_process').execSync('npm root -g').toString().trim();
  return require(path.join(root, 'playwright'));
}

function readCreds() {
  const file = process.env.SN_CREDS_FILE || path.join(process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config'), 'servicenow-pdi', 'creds.env');
  const f = {};
  if (fs.existsSync(file)) {
    for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
      const i = line.indexOf('=');
      if (i > 0) f[line.slice(0, i)] = line.slice(i + 1).replace(/^'(.*)'$/, '$1').replace(/\\(.)/g, '$1');
    }
  }
  const pick = (k, d) => process.env[k] || f[k] || d;
  return { instance: pick('SN_INSTANCE', 'https://dev469616.service-now.com'), user: pick('SN_USER', 'admin'), pass: pick('SN_PASS', '') };
}

(async () => {
  const [method, ...rest] = process.argv.slice(2);
  const m = (method || '').toUpperCase();
  if (!['GET', 'POST', 'PATCH', 'PUT', 'DELETE'].includes(m) || !rest.length) {
    console.error('Usage: sn-browser.js <get|post|patch|put|delete> <api path> [json body | more paths for get]');
    process.exit(2);
  }
  const { instance, user, pass } = readCreds();
  if (!pass) { console.error('No password: set SN_PASS or run scripts/sn-login.sh set-pass'); process.exit(2); }

  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  try {
    const page = await (await browser.newContext()).newPage();
    await page.goto(instance + '/login.do', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.fill('#user_name', user);
    await page.fill('#user_password', pass);
    await page.click('#sysverb_login');
    await page.waitForTimeout(6000);
    await page.goto(instance + '/sys_user_list.do?sysparm_nostack=true', { waitUntil: 'domcontentloaded' });
    const token = await page.evaluate(() => window.g_ck);
    if (!token) { console.error('LOGIN FAILED: no session token (wrong password, or instance asleep)'); process.exit(1); }

    const calls = m === 'GET' ? rest.map(p => [p, undefined]) : [[rest[0], rest[1]]];
    let bad = 0;
    for (const [p, body] of calls) {
      const r = await page.evaluate(async ([u, t, mm, b]) => {
        const h = { 'X-UserToken': t, Accept: 'application/json' };
        if (b) h['Content-Type'] = 'application/json';
        const x = await fetch(u, { method: mm, headers: h, body: b });
        return { status: x.status, text: await x.text() };
      }, [p, token, m, body]);
      if (r.status >= 400) bad = 1;
      if (calls.length > 1) console.log(`# ${m} ${p} -> ${r.status}`);
      console.log(r.text);
    }
    process.exitCode = bad;
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e.message); process.exit(3); });
