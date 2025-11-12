import { chromium, firefox, webkit } from '@playwright/test';
import config from '../config/config.js';

class BrowserManager {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async launchBrowser() {
    let browserType;
    
    switch (config.browser.toLowerCase()) {
      case 'firefox':
        browserType = firefox;
        break;
      case 'webkit':
        browserType = webkit;
        break;
      case 'chromium':
      default:
        browserType = chromium;
        break;
    }

    this.browser = await browserType.launch({
      headless: config.headless,
      slowMo: config.slowMo,
      // Force headed mode if headless is false
      args: config.headless === false ? ['--disable-blink-features=AutomationControlled'] : [],
    });

    return this.browser;
  }

  async createContext() {
    if (!this.browser) {
      await this.launchBrowser();
    }

    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });

    return this.context;
  }

  async createPage() {
    if (!this.context) {
      await this.createContext();
    }

    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(config.timeout);

    return this.page;
  }

  async navigateTo(url) {
    if (!this.page) {
      await this.createPage();
    }

    await this.page.goto(url, { waitUntil: 'networkidle' });
    return this.page;
  }

  getPage() {
    return this.page;
  }

  getContext() {
    return this.context;
  }

  getBrowser() {
    return this.browser;
  }

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
