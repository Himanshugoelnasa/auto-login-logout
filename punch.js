const { chromium } = require('playwright');
const { HRMS, AUTH, SELECTORS, TIMING, BROWSER } = require('./config');
const { log } = require('./utils/logger');

(async () => {
  log('Punch process started');

  const context = await chromium.launchPersistentContext('./profile', {
    headless: BROWSER.HEADLESS
  });

  const page = await context.newPage();

  await page.goto(HRMS.DASHBOARD_URL, {
    waitUntil: 'networkidle',
    timeout: TIMING.PAGE_LOAD_TIMEOUT
  });

  await page.waitForTimeout(1500);

  /* -------------------------
     LOGIN CHECK
  -------------------------- */

  const loginBtnExists = await page.locator(SELECTORS.LOGIN_BUTTON).count();
  if (loginBtnExists > 0) {
    log('Login required, logging in');

    await page.fill(SELECTORS.USERNAME, AUTH.USERNAME);
    await page.fill(SELECTORS.PASSWORD, AUTH.PASSWORD);
    await page.click(SELECTORS.LOGIN_BUTTON);

    await page.waitForNavigation({ waitUntil: 'networkidle' });
    log('Login successful');
  }

  /* -------------------------
     PUNCH LOGIC (FIXED)
  -------------------------- */

  const punchBtn = page.locator(SELECTORS.PUNCH_BUTTON);

  if (!(await punchBtn.isVisible())) {
    log('Punch button not visible');
    await context.close();
    return;
  }

  const value = await punchBtn.getAttribute('value');
  const pressed = await punchBtn.getAttribute('aria-pressed');

  log(`Punch state detected → value=${value}, aria-pressed=${pressed}`);

  if (value === '0' || pressed === 'false') {
    await punchBtn.click();
    log('Punch In successful');
  } else if (value === '1' || pressed === 'true') {
    await punchBtn.click();
    log('Punch Out successful');
  } else {
    log('Unable to determine punch state');
  }

  await page.waitForTimeout(2000);
  await context.close();
})();
