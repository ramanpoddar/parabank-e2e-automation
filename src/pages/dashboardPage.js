import BasePage from './basePage.js';

class DashboardPage extends BasePage {
  // Locators
  getWelcomeText() {
    return 'div[class*="welcome"]';
  }

  getAccountsTable() {
    return 'table[class*="account"]';
  }

  getLogoutLink() {
    return 'a[href="logout.htm"]';
  }

  getUsernameDisplay() {
    return '[class*="username"]';
  }

  /**
   * Check if user is on dashboard
   */
  async isDashboardDisplayed() {
    return await this.isElementVisible(this.getWelcomeText());
  }

  /**
   * Get welcome message on dashboard
   */
  async getWelcomeMessage() {
    return await this.getText(this.getWelcomeText());
  }

  /**
   * Check if accounts table is visible
   */
  async isAccountsTableVisible() {
    return await this.isElementVisible(this.getAccountsTable());
  }

  /**
   * Logout from dashboard
   */
  async logout() {
    await this.click(this.getLogoutLink());
  }
}

export default DashboardPage;
