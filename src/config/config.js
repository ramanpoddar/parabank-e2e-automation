const config = {
  baseURL: 'https://parabank.parasoft.com/parabank/index.htm',
  browser: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS === 'true' ? true : process.env.HEADLESS === 'false' ? false : true,
  slowMo: 100,
  timeout: 30000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  screenshots: 'only-on-failure',
  video: 'retain-on-failure',
};

// Debug: log the headless config
console.log(`🔧 Config: HEADLESS env=${process.env.HEADLESS}, headless config=${config.headless}`);

export default config;
