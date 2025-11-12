# ParaBank E2E Automation - Cucumber BDD Framework

This is a comprehensive end-to-end automation testing framework for the ParaBank application using **Cucumber BDD** with **Playwright** and **JavaScript**.

## 📁 Project Structure

```
parabank-e2e-automation/
├── features/                    # Cucumber feature files
│   └── login.feature           # Login feature scenarios
├── src/
│   ├── config/
│   │   └── config.js           # Configuration settings
│   ├── pages/                  # Page Object Model (POM)
│   │   ├── basePage.js         # Base page with common methods
│   │   ├── loginPage.js        # Login page object
│   │   └── dashboardPage.js    # Dashboard page object
│   ├── steps/                  # Step definitions
│   │   └── loginSteps.js       # Login step implementations
│   └── utils/
│       └── browserManager.js   # Browser management utilities
├── cucumber.js                 # Cucumber configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Verify installation:**
   ```bash
   npx cucumber-js --version
   ```

## 🧪 Running Tests

### Run all tests in default (Chromium) browser
```bash
npm test
```

### Run tests in headed mode (see the browser)
```bash
npm run test:headed
```

### Run tests in headless mode
```bash
npm run test:headless
```

### Run tests in specific browser
```bash
# Firefox
npm run test:firefox

# WebKit
npm run test:webkit

# Chromium
npm run test:chromium
```

### Run tests with debug mode
```bash
npm run test:debug
```

## 📋 Features Implemented

### 1. Login Feature (`features/login.feature`)
- ✅ Verify ParaBank home page loads successfully
- ✅ User login with valid credentials
- ✅ User logout functionality

## 📖 Framework Components

### Page Object Model (POM)

#### BasePage (`src/pages/basePage.js`)
Base class containing common page methods:
- `navigateTo(url)` - Navigate to a URL
- `click(selector)` - Click on an element
- `fill(selector, text)` - Fill input fields
- `getText(selector)` - Get element text
- `isElementVisible(selector)` - Check element visibility
- `takeScreenshot(filename)` - Capture screenshots
- `getCurrentURL()` - Get current page URL
- And more...

#### LoginPage (`src/pages/loginPage.js`)
Page object for login operations:
- `navigateToParaBank()` - Navigate to ParaBank home
- `enterUsername(username)` - Enter username
- `enterPassword(password)` - Enter password
- `clickLoginButton()` - Click login button
- `login(username, password)` - Complete login flow
- `clickLogoutButton()` - Perform logout

#### DashboardPage (`src/pages/dashboardPage.js`)
Page object for dashboard operations:
- `isDashboardDisplayed()` - Check dashboard visibility
- `getWelcomeMessage()` - Get welcome text
- `logout()` - Logout from dashboard

### Step Definitions (`src/steps/loginSteps.js`)

Cucumber step definitions for BDD scenarios:
- `Given User navigates to ParaBank application`
- `When User is on the ParaBank home page`
- `Then User should see the ParaBank login form`
- `When User enters username {string}`
- `When User enters password {string}`
- `When User clicks the login button`
- `Then User should be logged in successfully`
- And more...

### Browser Manager (`src/utils/browserManager.js`)

Utility class for browser operations:
- `launchBrowser()` - Launch Playwright browser
- `createContext()` - Create browser context
- `createPage()` - Create new page
- `navigateTo(url)` - Navigate to URL
- `closePage()` / `closeContext()` / `closeBrowser()` - Cleanup resources
- Singleton pattern for easy access

### Configuration (`src/config/config.js`)

Centralized configuration:
```javascript
{
  baseURL: 'https://parabank.parasoft.com/parabank/index.htm',
  browser: 'chromium',
  headless: true,
  slowMo: 100,
  timeout: 30000,
  screenshots: 'only-on-failure'
}
```

## 🔑 Test Credentials

Use these credentials for testing (as per ParaBank demo):
- **Username:** john
- **Password:** demo

## 📊 Test Reports

Test reports are generated in:
- `test-results/cucumber-report.html` - HTML report
- `test-results/cucumber-report.json` - JSON report

## 🛠️ Configuration Files

### cucumber.js
- Defines step directories
- Configures report formats
- Sets parallel execution

### playwright.config.js
- Browser configuration
- Trace and video recording
- Screenshot settings

## 🎯 Best Practices Implemented

1. **Page Object Model** - Separation of concerns
2. **BDD Framework** - Cucumber for readable scenarios
3. **Reusable Components** - BasePage with common methods
4. **Configuration Management** - Centralized config
5. **Browser Management** - Singleton pattern
6. **Error Handling** - Try-catch blocks in utilities
7. **Async/Await** - Modern async code
8. **Meaningful Locators** - Page-specific getters

## 🚀 Extending the Framework

### Add New Feature
1. Create `.feature` file in `features/` directory
2. Create corresponding step file in `src/steps/`
3. Create page objects in `src/pages/` if needed

### Add New Page Object
```javascript
const BasePage = require('./basePage');

class NewPage extends BasePage {
  // Define locators
  getElement() {
    return 'selector-here';
  }

  // Define page methods
  async doSomething() {
    await this.click(this.getElement());
  }
}

module.exports = NewPage;
```

### Add New Step Definition
```javascript
When('User does something {string}', async function (parameter) {
  // Implementation
});
```

## 🐛 Debugging

1. **Use headed mode:**
   ```bash
   npm run test:headed
   ```

2. **Add debug logs** in step definitions
3. **Use Playwright Inspector:**
   ```bash
   PWDEBUG=1 npm test
   ```

4. **Check test reports** in `test-results/` directory

## 📦 Dependencies

- **@cucumber/cucumber** - BDD framework
- **@playwright/test** - Browser automation
- **@types/node** - TypeScript definitions
- **allure-playwright** - Allure reporting

## 💡 Tips

- Tests run in parallel by default for faster execution
- Use `@skip` tag to skip specific scenarios
- Use `@focus` tag to run only specific scenarios
- Screenshots are captured on test failures

## 🤝 Contributing

1. Follow existing code structure
2. Use meaningful test data
3. Keep step definitions simple and readable
4. Add comments for complex logic

## 📄 License

ISC

## 🔗 Resources

- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [Playwright Documentation](https://playwright.dev/)
- [ParaBank Demo Application](https://parabank.parasoft.com/)

---

**Happy Testing! 🎉**
