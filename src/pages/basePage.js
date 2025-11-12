class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   * @param {string} url - The URL to navigate to
   */
  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  /**
   * Wait for element to be visible
   * @param {string} selector - The selector of the element
   * @param {number} timeout - Timeout in milliseconds
   */
  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * Click on an element
   * @param {string} selector - The selector of the element
   */
  async click(selector) {
    await this.waitForElement(selector);
    await this.page.click(selector);
  }

  /**
   * Fill input field
   * @param {string} selector - The selector of the element
   * @param {string} text - The text to fill
   */
  async fill(selector, text) {
    await this.waitForElement(selector);
    await this.page.fill(selector, text);
  }

  /**
   * Get text from an element
   * @param {string} selector - The selector of the element
   */
  async getText(selector) {
    await this.waitForElement(selector);
    return await this.page.textContent(selector);
  }

  /**
   * Check if element is visible
   * @param {string} selector - The selector of the element
   */
  async isElementVisible(selector) {
    try {
      await this.waitForElement(selector, 3000);
      return await this.page.isVisible(selector);
    } catch {
      return false;
    }
  }

  /**
   * Get attribute value
   * @param {string} selector - The selector of the element
   * @param {string} attribute - The attribute name
   */
  async getAttribute(selector, attribute) {
    await this.waitForElement(selector);
    return await this.page.getAttribute(selector, attribute);
  }

  /**
   * Get current page URL
   */
  async getCurrentURL() {
    return this.page.url();
  }

  /**
   * Get page title
   */
  async getPageTitle() {
    return await this.page.title();
  }

  /**
   * Take a screenshot
   * @param {string} filename - The filename for the screenshot
   */
  async takeScreenshot(filename) {
    await this.page.screenshot({ path: `./screenshots/${filename}.png`, fullPage: true });
  }
}

export default BasePage;
