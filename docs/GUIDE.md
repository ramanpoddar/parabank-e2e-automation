# ParaBank E2E Automation - Quick Start Guide

## 📚 Overview

This guide will help you understand the structure and usage of the ParaBank BDD automation framework.

## 🎯 What This Framework Does

This framework automates testing of the **ParaBank Application** (https://parabank.parasoft.com/parabank/index.htm) using:
- **Cucumber** for BDD (Behavior Driven Development)
- **Playwright** for browser automation
- **JavaScript** for implementation
- **Page Object Model** for maintainability

## 🏗️ Framework Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FEATURE FILES (.feature)                  │
│              Human-readable test scenarios                   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   STEP DEFINITIONS                           │
│         Cucumber maps features to step functions             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  PAGE OBJECT MODEL                           │
│         Encapsulates page interactions & locators            │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                 BROWSER AUTOMATION                           │
│               Playwright controls browser                    │
└─────────────────────────────────────────────────────────────┘
```

## 📂 File Organization

### Feature Files (`features/`)
Contains **Gherkin** syntax test scenarios that are readable by business stakeholders.

**Example: `features/login.feature`**
```gherkin
Feature: ParaBank Login Functionality
  
  Scenario: User login with valid credentials
    Given User navigates to ParaBank application
    When User enters username "john"
    And User enters password "demo"
    And User clicks the login button
    Then User should be logged in successfully
```

### Page Objects (`src/pages/`)
Encapsulates page elements and interactions using **Page Object Model** pattern.

**Structure:**
- `basePage.js` - Common methods for all pages
- `loginPage.js` - Login page specific methods
- `dashboardPage.js` - Dashboard specific methods

**Example usage in step definitions:**
```javascript
const loginPage = new LoginPage(browserManager.getPage());
await loginPage.login('john', 'demo');
```

### Step Definitions (`src/steps/`)
Maps Gherkin steps to actual test code.

**Files:**
- `loginSteps.js` - Login related steps
- `hooks.js` - Setup/teardown logic

**Example:**
```javascript
When('User enters username {string}', async function (username) {
  await loginPage.enterUsername(username);
});
```

### Utilities (`src/utils/`)
Helper classes for browser management and common operations.

**Files:**
- `browserManager.js` - Manages browser lifecycle

### Configuration (`src/config/`)
Centralized configuration settings.

**Files:**
- `config.js` - Base configuration settings

## 🚀 Step-by-Step Usage

### 1. Setting Up

```bash
# Install dependencies
npm install

# Verify setup
npx cucumber-js --version
```

### 2. Writing a Feature

Create a file: `features/newFeature.feature`

```gherkin
Feature: New Feature Name

  Scenario: Describe what should happen
    Given Initial state
    When Some action happens
    Then Expected result
```

### 3. Implementing Steps

Create a file: `src/steps/newFeature.js`

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/loginPage');
const browserManager = require('../utils/browserManager');

let loginPage;

Before(async function () {
  await browserManager.createPage();
  loginPage = new LoginPage(browserManager.getPage());
});

Given('Initial state', async function () {
  // Your implementation
});

When('Some action happens', async function () {
  // Your implementation
});

Then('Expected result', async function () {
  // Your assertion
});
```

### 4. Creating Page Objects

Create a file: `src/pages/newPage.js`

```javascript
const BasePage = require('./basePage');

class NewPage extends BasePage {
  // Define locators as methods
  getElement() {
    return 'css-selector-or-xpath';
  }

  // Define page methods
  async clickElement() {
    await this.click(this.getElement());
  }

  async fillForm(data) {
    await this.fill(this.getFormInput(), data);
  }
}

module.exports = NewPage;
```

### 5. Running Tests

```bash
# Run all tests
npm test

# Run in headed mode (see the browser)
npm run test:headed

# Run in specific browser
npm run test:firefox
```

## 🔍 Key Methods Available

### BasePage Methods

```javascript
// Navigation
await page.navigateTo('https://example.com');

// Element Interaction
await page.click('selector');
await page.fill('selector', 'text');
await page.getText('selector');

// Waits & Assertions
await page.waitForElement('selector');
await page.isElementVisible('selector');

// Page Info
await page.getCurrentURL();
await page.getPageTitle();

// Screenshots
await page.takeScreenshot('filename');
```

### BrowserManager Methods

```javascript
// Browser Control
await browserManager.launchBrowser();
await browserManager.createContext();
await browserManager.createPage();
await browserManager.navigateTo(url);

// Cleanup
await browserManager.closePage();
await browserManager.closeContext();
await browserManager.closeBrowser();
await browserManager.closeAll();

// Access
browserManager.getPage();
browserManager.getContext();
browserManager.getBrowser();
```

## 🧪 Test Data

### ParaBank Demo Credentials
```
Username: john
Password: demo
```

## 📊 Test Execution Flow

```
1. npm test (starts Cucumber)
   ↓
2. Cucumber reads .feature files
   ↓
3. Hooks.js → Before() executes
   ↓
4. Each step executes corresponding step definition
   ↓
5. Step definition calls Page Object methods
   ↓
6. Page Object calls BasePage methods
   ↓
7. BasePage uses BrowserManager → Playwright
   ↓
8. Playwright controls browser and performs actions
   ↓
9. Hooks.js → After() executes (cleanup)
   ↓
10. Report generated in test-results/
```

## 🎨 Gherkin Best Practices

### ✅ Good
```gherkin
Given User is on the login page
When User enters valid credentials
And User clicks the login button
Then User should see the dashboard
```

### ❌ Avoid
```gherkin
Given User does stuff
When User does more stuff
Then Something happens
```

## 🔧 Locator Strategies

### CSS Selectors
```javascript
'input[name="username"]'  // By attribute
'.login-button'           // By class
'#loginBtn'               // By ID
'form input:first-child'  // Complex selector
```

### XPath
```javascript
'//input[@name="username"]'
'//button[contains(text(), "Login")]'
'//div[@class="form"]//input[1]'
```

## 💾 State Management

### Before Hook (Runs before each scenario)
```javascript
Before(async function () {
  await browserManager.createPage();  // Fresh browser
  loginPage = new LoginPage(browserManager.getPage());
});
```

### After Hook (Runs after each scenario)
```javascript
After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    // Take screenshot on failure
    await browserManager.getPage().screenshot({ path: 'failure.png' });
  }
  await browserManager.closeAll();  // Clean up
});
```

## 🐛 Common Issues & Solutions

### Issue: "Element not found"
```javascript
// Use explicit waits
await page.waitForElement('selector', 5000);
```

### Issue: "Timeout waiting for element"
```javascript
// Increase timeout in config.js
timeout: 60000  // 60 seconds
```

### Issue: "Navigation timeout"
```javascript
// Wait for network to settle
await page.page.waitForLoadState('networkidle');
```

## 📈 Scaling the Framework

### Add More Features
- Create `.feature` files for each feature/user story
- Follow naming: `featureName.feature`

### Add More Page Objects
- One page object per page
- Extend `BasePage` class
- Group related methods together

### Add More Step Definitions
- Group by feature
- One file per feature area
- Keep steps simple and readable

## 🎯 Advanced Topics

### Taking Screenshots
```javascript
const loginPage = new LoginPage(page);
await loginPage.takeScreenshot('login-form');
```

### Custom Waits
```javascript
async customWait(condition, timeout = 5000) {
  return this.page.waitForFunction(condition, { timeout });
}
```

### Getting Attribute Values
```javascript
const placeholder = await page.getAttribute('input', 'placeholder');
```

### Handling Popups
```javascript
page.once('popup', popup => {
  // Handle popup
});
```

## 📚 Additional Resources

- [Cucumber.js Docs](https://cucumber.io/docs/cucumber/)
- [Playwright Docs](https://playwright.dev/docs/intro)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/reference/)
- [ParaBank App](https://parabank.parasoft.com/)

## ✨ Tips for Success

1. **Keep steps simple** - Each step should do one thing
2. **Use meaningful locators** - Don't rely on fragile XPaths
3. **Separate concerns** - Pages, steps, and utilities in different files
4. **Use descriptive names** - Names should explain intent
5. **DRY principle** - Don't repeat code
6. **Test data management** - Keep test data organized
7. **Regular refactoring** - Improve code as you learn

## 🤔 Troubleshooting

### Tests not running?
```bash
npm install
npx cucumber-js --version
```

### Browser not opening?
```bash
npm run test:headed  # Run in headed mode to see what happens
```

### Locators not working?
1. Inspect element in browser (F12)
2. Copy the selector
3. Test in Playwright Inspector: `PWDEBUG=1 npm test`

## 🎉 Next Steps

1. Run the example tests: `npm test`
2. Review the feature file: `features/login.feature`
3. Study the page objects: `src/pages/`
4. Create your first custom feature!

---

**Happy Testing! Questions? Check the main README.md for more details.**
