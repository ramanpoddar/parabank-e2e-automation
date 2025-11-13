import BasePage from './basePage.js';

class LoginPage extends BasePage {
  // Simple locator methods
  usernameInput() { return '[name="username"]'; }
  passwordInput() { return '[name="password"]'; }
  loginButton() { return 'input[value="Log In"]'; }
  loginForm() { return '#loginPanel'; }
  logoutLink() { return 'a[href="logout.htm"]'; }
  errorSelector() { return '.error'; }
  welcomeSelector() { return 'h2.title'; }

  // Navigate to the app home page
  async navigateToParaBank() {
    await this.navigateTo('https://parabank.parasoft.com/parabank/index.htm');
  }

  // Helpers for tests
  async isLoginFormVisible() { return this.isElementVisible(this.loginForm()); }
  async enterUsername(username) { await this.fill(this.usernameInput(), username); }
  async enterPassword(password) { await this.fill(this.passwordInput(), password); }
  async clickLoginButton() { await this.click(this.loginButton()); }
  async clickLogoutButton() { await this.click(this.logoutLink()); }
  async getErrorMessageText() { return this.getText(this.errorSelector()); }
  async isErrorMessageVisible() { return this.isElementVisible(this.errorSelector()); }
  async getWelcomeText() { return this.getText(this.welcomeSelector()); }
  async isWelcomeMessageVisible() { return this.isElementVisible(this.welcomeSelector()); }
}

export default LoginPage;
