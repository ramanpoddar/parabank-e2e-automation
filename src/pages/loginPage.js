import BasePage from './basePage.js';

class LoginPage extends BasePage {
  // Locators
  getUsernameInput() {
    return '[name="username"]';
  }

  getPasswordInput() {
    return '[name="password"]';
  }

  getLoginButton() {
    return 'input[value="Log In"]';
  }

  getLoginForm() {
    return '[id="loginPanel"]';
  }

  getLogoutLink() {
    return 'a[href="logout.htm"]';
  }

  getErrorMessage() {
    return '.error';
  }

  getWelcomeMessage() {
    return 'h2.title';
  }

  /**
   * Navigate to ParaBank home page
   */
  async navigateToParaBank() {
    await this.navigateTo('https://parabank.parasoft.com/parabank/index.htm');
  }

  /**
   * Check if login form is visible
   */
  async isLoginFormVisible() {
    return await this.isElementVisible(this.getLoginForm());
  }

  /**
   * Enter username
   * @param {string} username - The username to enter
   */
  async enterUsername(username) {
    await this.fill(this.getUsernameInput(), username);
  }

  /**
   * Enter password
   * @param {string} password - The password to enter
   */
  async enterPassword(password) {
    await this.fill(this.getPasswordInput(), password);
  }

  /**
   * Click login button
   */
  async clickLoginButton() {
    await this.click(this.getLoginButton());
  }

  /**
   * Perform login with username and password
   * @param {string} username - The username
   * @param {string} password - The password
   */
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  /**
   * Click logout button
   */
  async clickLogoutButton() {
    await this.click(this.getLogoutLink());
  }

  /**
   * Get error message
   */
  async getErrorMessageText() {
    return await this.getText(this.getErrorMessage());
  }

  /**
   * Check if error message is visible
   */
  async isErrorMessageVisible() {
    return await this.isElementVisible(this.getErrorMessage());
  }

  /**
   * Get welcome message
   */
  async getWelcomeText() {
    return await this.getText(this.getWelcomeMessage());
  }

  /**
   * Check if welcome message is visible
   */
  async isWelcomeMessageVisible() {
    return await this.isElementVisible(this.getWelcomeMessage());
  }
}

export default LoginPage;
