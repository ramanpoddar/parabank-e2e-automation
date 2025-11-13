import BasePage from './basePage.js';

class DashboardPage extends BasePage {
  welcomeSelector() { return 'div[class*="welcome"]'; }
  accountsSelector() { return 'table[class*="account"]'; }
  logoutLink() { return 'a[href="logout.htm"]'; }

  async isDashboardDisplayed() { return this.isElementVisible(this.welcomeSelector()); }
  async getWelcomeMessage() { return this.getText(this.welcomeSelector()); }
  async isAccountsTableVisible() { return this.isElementVisible(this.accountsSelector()); }
  async logout() { await this.click(this.logoutLink()); }
}

export default DashboardPage;
