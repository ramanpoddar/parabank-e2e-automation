class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Go to a URL
  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  // Wait until an element is present
  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  // Click an element
  async click(selector) {
    await this.waitForElement(selector);
    await this.page.click(selector);
  }

  // Fill an input
  async fill(selector, text) {
    await this.waitForElement(selector);
    await this.page.fill(selector, text);
  }

  // Read text content
  async getText(selector) {
    await this.waitForElement(selector);
    return this.page.textContent(selector);
  }

  // Check visibility
  async isElementVisible(selector) {
    try {
      await this.waitForElement(selector, 3000);
      return this.page.isVisible(selector);
    } catch (e) {
      return false;
    }
  }

  // Get current URL
  async getCurrentURL() {
    return this.page.url();
  }

  // Take a screenshot (helper)
  async takeScreenshot(filename) {
    await this.page.screenshot({ path: `./screenshots/${filename}.png`, fullPage: true });
  }
}

export default BasePage;
