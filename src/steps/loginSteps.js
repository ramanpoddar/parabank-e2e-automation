import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import browserManager from '../utils/browserManager.js';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';

let loginPage;
let dashboardPage;

Before(async function () {
  // Create a new page before each scenario
  await browserManager.createPage();
  loginPage = new LoginPage(browserManager.getPage());
  dashboardPage = new DashboardPage(browserManager.getPage());
});

After(async function () {
  // Capture a screenshot for each scenario before closing the page
  try {
    const page = browserManager.getPage();
    if (page) {
      const buffer = await page.screenshot({ fullPage: true });
      if (this && typeof this.attach === 'function') {
        await this.attach(buffer, 'image/png');
      }

      const timestamp = new Date().getTime();
      const filename = `screenshot-after-${timestamp}.png`;
      try {
        const fs = await import('fs');
        await fs.promises.writeFile(`./screenshots/${filename}`, buffer);
        console.log(`📸 Screenshot saved: ${filename}`);
      } catch (err) {
        console.log('Could not save screenshot to disk:', err.message || err);
      }
    }
  } catch (err) {
    console.log('Error capturing screenshot in step-level After:', err.message || err);
  }

  // Close the page after each scenario
  await browserManager.closePage();
});

// ==================== GIVEN STEPS ====================

/**
 * Given: User navigates to ParaBank application
 */
Given('User navigates to ParaBank application', async function () {
  await loginPage.navigateToParaBank();
});

// ==================== WHEN STEPS ====================

/**
 * When: User is on the ParaBank home page
 */
When('User is on the ParaBank home page', async function () {
  // Verify the user is on the home page
  const url = await loginPage.getCurrentURL();
  if (!url.includes('parabank')) {
    throw new Error('User is not on ParaBank home page');
  }
});

/**
 * When: User enters username {string}
 * Example: When User enters username "john"
 */
When('User enters username {string}', async function (username) {
  await loginPage.enterUsername(username);
});

/**
 * When: User enters password {string}
 * Example: When User enters password "demo"
 */
When('User enters password {string}', async function (password) {
  await loginPage.enterPassword(password);
});

/**
 * When: User clicks the login button
 */
When('User clicks the login button', async function () {
  await loginPage.clickLoginButton();
  // Wait for navigation after login
  await browserManager.getPage().waitForLoadState('networkidle');
});

/**
 * When: User clicks the logout button
 */
When('User clicks the logout button', async function () {
  await loginPage.clickLogoutButton();
  // Wait for navigation after logout
  await browserManager.getPage().waitForLoadState('networkidle');
});

// ==================== THEN STEPS ====================

/**
 * Then: User should see the ParaBank login form
 */
Then('User should see the ParaBank login form', async function () {
  const isFormVisible = await loginPage.isLoginFormVisible();
  if (!isFormVisible) {
    throw new Error('Login form is not visible');
  }
});

/**
 * Then: User should be logged in successfully
 */
Then('User should be logged in successfully', async function () {
  // Check if user is redirected to a page that indicates successful login
  const url = await loginPage.getCurrentURL();
  // After successful login, the URL should change or we should see dashboard elements
  if (url.includes('index.htm')) {
    // Check if welcome message or dashboard elements are visible
    const isDashboardVisible = await dashboardPage.isDashboardDisplayed();
    if (!isDashboardVisible) {
      // Try alternative check
      const pageContent = await browserManager.getPage().content();
      if (!pageContent.includes('Welcome') && !pageContent.includes('Accounts Overview')) {
        throw new Error('User is not logged in successfully');
      }
    }
  }
});

/**
 * Then: User should see the dashboard
 */
Then('User should see the dashboard', async function () {
  const isDashboardVisible = await dashboardPage.isDashboardDisplayed();
  if (!isDashboardVisible) {
    // Alternative check - look for accounts information
    const pageContent = await browserManager.getPage().content();
    if (!pageContent.includes('Account')) {
      throw new Error('Dashboard is not visible');
    }
  }
});

/**
 * Then: User should be redirected to login page
 */
Then('User should be redirected to login page', async function () {
  const isLoginFormVisible = await loginPage.isLoginFormVisible();
  if (!isLoginFormVisible) {
    throw new Error('User is not on login page after logout');
  }
});
