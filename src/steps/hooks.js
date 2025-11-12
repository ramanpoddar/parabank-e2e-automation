import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import browserManager from '../utils/browserManager.js';

// Set default timeout for all steps (30 seconds)
setDefaultTimeout(30 * 1000);

/**
 * Global setup before any scenarios run
 */
BeforeAll(async function () {
  console.log('🚀 Starting ParaBank E2E Automation Tests...');
  console.log('Application URL: https://parabank.parasoft.com/parabank/index.htm');
});

/**
 * Global cleanup after all scenarios run
 */
AfterAll(async function () {
  console.log('✅ All tests completed!');
  await browserManager.closeAll();
});

/**
 * Before each scenario
 */
Before(async function (testCase) {
  // Cucumber may pass the test case/pickle as an argument; fall back to `this` if available
  const name = testCase?.pickle?.name || this?.pickle?.name || 'Unknown Scenario';
  console.log(`\n📝 Starting scenario: ${name}`);
});

/**
 * After each scenario
 */
After(async function (scenario) {
  const name = scenario?.pickle?.name || 'Unknown Scenario';
  const status = scenario?.result?.status || 'UNKNOWN';
  console.log(status === 'FAILED' ? `❌ Scenario failed: ${name}` : `✅ Scenario ${status.toLowerCase()}: ${name}`);

  // Take a screenshot for every scenario (passed or failed) and attach to the report
  try {
    const page = browserManager.getPage();
    if (page) {
      // Capture screenshot as Buffer
      const screenshotBuffer = await page.screenshot({ fullPage: true });

      // Attach to Cucumber report (embeds into cucumber json if using json formatter)
      if (this && typeof this.attach === 'function') {
        await this.attach(screenshotBuffer, 'image/png');
      }

      // Also save a copy to screenshots folder for manual inspection
      const timestamp = new Date().getTime();
      const filename = `screenshot-${status.toLowerCase()}-${timestamp}.png`;
      try {
        // Write file to disk
        const fs = await import('fs');
        await fs.promises.writeFile(`./screenshots/${filename}`, screenshotBuffer);
        console.log(`📸 Screenshot saved: ${filename}`);
      } catch (err) {
        console.log('Could not save screenshot to disk:', err.message || err);
      }
    } else {
      console.log('No page available to capture screenshot');
    }
  } catch (error) {
    console.log('Could not capture/attach screenshot:', error.message || error);
  }

  // Close browser after each scenario
  await browserManager.closeAll();
});

export { setDefaultTimeout };
