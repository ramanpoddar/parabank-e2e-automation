import { chromium, firefox, webkit } from '@playwright/test';
import config from '../config/config.js';

// Compact viewport default with env overrides
const VIEWPORT = { width: +(process.env.VIEWPORT_WIDTH) || 1350, height: +(process.env.VIEWPORT_HEIGHT) || 700 };

class BrowserManager {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  // Launch the browser (chromium/firefox/webkit) using config
  async launchBrowser() {
    const browserName = (config.browser || 'chromium').toLowerCase();
    let browserType = chromium;
    if (browserName === 'firefox') browserType = firefox;
    if (browserName === 'webkit') browserType = webkit;

    // If running headed, pass window-size to ensure consistent visible area
    const args = config.headless === false ? [`--window-size=${VIEWPORT.width},${VIEWPORT.height}`] : [];

    this.browser = await browserType.launch({
      headless: !!config.headless,
      slowMo: config.slowMo || 0,
      args,
    });

    return this.browser;
  }

  // Create a new browser context with a desktop viewport
  async createContext() {
    if (!this.browser) await this.launchBrowser();
    // Use viewport values defined in browserManager so content appears centered and fits the window
    this.context = await this.browser.newContext({ viewport: VIEWPORT });
    return this.context;
  }

  // Create a new page and set default timeout
  async createPage() {
    if (!this.context) await this.createContext();
    this.page = await this.context.newPage();
    if (this.page && config.timeout) this.page.setDefaultTimeout(config.timeout);
    return this.page;
  }

  // Navigate to a URL (convenience method)
  async navigateTo(url) {
    if (!this.page) await this.createPage();
    await this.page.goto(url, { waitUntil: 'networkidle' });
    return this.page;
  }

  getPage() { return this.page; }
  getContext() { return this.context; }
  getBrowser() { return this.browser; }

  async closePage() {
    if (this.page) {
      await this.page.close();
      this.page = null;
    }
  }

  async closeContext() {
    if (this.context) {
      await this.context.close();
      this.context = null;
    }
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  async closeAll() {
    await this.closePage();
    await this.closeContext();
    await this.closeBrowser();
  }
}

export default new BrowserManager();
