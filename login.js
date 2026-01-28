const { chromium } = require('playwright');
const { HRMS, BROWSER } = require('./config');
const { log } = require('./utils/logger');

(async () => {
  log('Opening browser for manual login...');

  const context = await chromium.launchPersistentContext('./profile', {
    headless: BROWSER.HEADLESS
  });

  const page = await context.newPage();
  await page.goto(HRMS.LOGIN_URL);

  log('Please login manually. After login, CLOSE the browser.');

})();
