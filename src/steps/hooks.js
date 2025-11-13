import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import browserManager from '../utils/browserManager.js';
import fs from 'fs';

// Default timeout for steps: 30s
setDefaultTimeout(30 * 1000);

BeforeAll(async () => {
  console.log('🚀 Starting ParaBank E2E Automation Tests...');
  console.log('Application URL: https://parabank.parasoft.com/parabank/index.htm');
});

AfterAll(async () => {
  console.log('✅ All tests completed!');
  await browserManager.closeAll();
});

Before(function (testCase) {
  const name = testCase?.pickle?.name || this?.pickle?.name || 'Unknown Scenario';
  console.log(`\n📝 Starting scenario: ${name}`);
});

After(async function (scenario) {
  const name = scenario?.pickle?.name || 'Unknown Scenario';
  const status = scenario?.result?.status || 'UNKNOWN';
  console.log(status === 'FAILED' ? `❌ Scenario failed: ${name}` : `✅ Scenario ${status.toLowerCase()}: ${name}`);

  // Capture screenshot if possible and attach to report
  try {
    const page = browserManager.getPage();
    if (page) {
      const buffer = await page.screenshot({ fullPage: true });
      if (this && typeof this.attach === 'function') await this.attach(buffer, 'image/png');

      // Save local copy
      const timestamp = Date.now();
      const filename = `screenshot-${status.toLowerCase()}-${timestamp}.png`;
      await fs.promises.writeFile(`./screenshots/${filename}`, buffer);
      console.log(`📸 Screenshot saved: ${filename}`);
    }
  } catch (err) {
    console.log('Screenshot/attach failed:', err.message || err);
  }

  // Ensure browser is closed
  await browserManager.closeAll();
});

export { setDefaultTimeout };
