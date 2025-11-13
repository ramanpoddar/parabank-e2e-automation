import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import browserManager from '../utils/browserManager.js';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';

/** @type {import('../pages/loginPage.js').default} */
let loginPage;
/** @type {import('../pages/dashboardPage.js').default} */
let dashboardPage;

// Setup: create a page and page objects before each scenario
Before(async function () {
  await browserManager.createPage();
  const page = browserManager.getPage();
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
});

// Teardown: close page after each scenario
After(async function () {
  await browserManager.closePage();
});

// Steps
Given('User navigates to ParaBank application', async function () {
  await loginPage.navigateToParaBank();
});

When('User is on the ParaBank home page', async function () {
  const url = await loginPage.getCurrentURL();
  if (!url.includes('parabank')) throw new Error('User is not on ParaBank home page');
});

When('User enters username {string}', async function (username) {
  await loginPage.enterUsername(username);
});

When('User enters password {string}', async function (password) {
  await loginPage.enterPassword(password);
});

When('User clicks the login button', async function () {
  await loginPage.clickLoginButton();
  const page = browserManager.getPage();
  if (page) await page.waitForLoadState('networkidle');
});

When('User clicks the logout button', async function () {
  await loginPage.clickLogoutButton();
  const page = browserManager.getPage();
  if (page) await page.waitForLoadState('networkidle');
});

Then('User should see the ParaBank login form', async function () {
  const visible = await loginPage.isLoginFormVisible();
  if (!visible) throw new Error('Login form is not visible');
});

Then('User should be logged in successfully', async function () {
  const url = await loginPage.getCurrentURL();
  if (url.includes('index.htm')) {
    const isDashboardVisible = await dashboardPage.isDashboardDisplayed();
    if (!isDashboardVisible) {
      const page = browserManager.getPage();
      const content = page ? await page.content() : '';
      if (!content.includes('Welcome') && !content.includes('Accounts Overview')) {
        throw new Error('User is not logged in successfully');
      }
    }
  }
});

Then('User should see the dashboard', async function () {
  const visible = await dashboardPage.isDashboardDisplayed();
  if (!visible) {
    const page = browserManager.getPage();
    const content = page ? await page.content() : '';
    if (!content.includes('Account')) throw new Error('Dashboard is not visible');
  }
});

Then('User should be redirected to login page', async function () {
  const visible = await loginPage.isLoginFormVisible();
  if (!visible) throw new Error('User is not on login page after logout');
});
