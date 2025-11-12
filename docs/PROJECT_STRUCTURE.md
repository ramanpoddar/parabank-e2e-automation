# Project Structure Summary

## 📁 Complete Directory Layout

```
parabank-e2e-automation/
│
├── features/                          # 🎯 Cucumber Feature Files
│   ├── login.feature                 # Login & logout scenarios
│   └── registration.feature          # Registration scenarios (WIP)
│
├── src/                              # 📚 Source Code
│   │
│   ├── config/
│   │   └── config.js                 # Configuration settings
│   │
│   ├── pages/                        # 🔧 Page Object Model
│   │   ├── basePage.js              # Base class with common methods
│   │   ├── loginPage.js             # Login page object
│   │   └── dashboardPage.js         # Dashboard page object
│   │
│   ├── steps/                        # 🎭 Step Definitions
│   │   ├── hooks.js                 # Before/After hooks
│   │   └── loginSteps.js            # Login step implementations
│   │
│   └── utils/                        # 🛠️ Utilities
│       └── browserManager.js         # Browser management
│
├── screenshots/                       # 📸 Screenshot Storage
│
├── test-results/                      # 📊 Test Reports
│   ├── cucumber-report.html          # HTML report
│   └── cucumber-report.json          # JSON report
│
├── .gitignore                        # Git ignore rules
├── .env.example                      # Environment variables example
├── cucumber.js                       # Cucumber configuration
├── package.json                      # NPM dependencies & scripts
├── playwright.config.js              # Playwright configuration
├── README.md                         # Main documentation
└── GUIDE.md                          # Detailed usage guide
```

## 🎯 What Each File Does

### Core Configuration
- **cucumber.js** - Configures Cucumber test runner, reporters, parallel execution
- **package.json** - Dependencies and npm scripts
- **.env.example** - Template for environment variables

### Page Objects (`src/pages/`)
- **basePage.js** - Provides common methods for all pages (click, fill, wait, etc.)
- **loginPage.js** - Handles login form interactions
- **dashboardPage.js** - Handles dashboard interactions after login

### Step Definitions (`src/steps/`)
- **hooks.js** - Setup and teardown logic for each scenario
- **loginSteps.js** - Implements the Gherkin steps from login.feature

### Utilities (`src/utils/`)
- **browserManager.js** - Manages browser lifecycle, context, and page

### Configuration (`src/config/`)
- **config.js** - Centralized configuration for browser, timeouts, etc.

### Features (`features/`)
- **login.feature** - Login and logout scenarios in Gherkin syntax
- **registration.feature** - Registration scenarios (marked as WIP - Work In Progress)

## 🔄 How It All Works Together

```
User runs: npm test
    ↓
Cucumber reads: features/login.feature
    ↓
Cucumber finds matching steps in: src/steps/loginSteps.js
    ↓
Steps use Page Objects: src/pages/loginPage.js
    ↓
Page Objects use utilities: src/utils/browserManager.js
    ↓
BrowserManager controls: @playwright/test
    ↓
Tests run in browser (Chrome/Firefox/Safari)
    ↓
Results saved: test-results/
    ↓
Screenshots on failure: screenshots/
```

## 📋 Dependencies

- **@cucumber/cucumber** - BDD framework
- **@playwright/test** - Browser automation
- **@types/node** - Node.js types

## 🚀 Quick Start Commands

```bash
npm install              # Install dependencies
npm test                # Run tests
npm run test:headed     # Run with browser visible
npm run test:firefox    # Run in Firefox
npm run test:debug      # Run with Playwright inspector
```

## ✨ Key Features Implemented

✅ Page Object Model (POM) pattern
✅ Cucumber BDD framework
✅ Playwright browser automation
✅ Before/After hooks
✅ Configuration management
✅ Screenshot on failure
✅ Parallel test execution
✅ Reusable base page methods
✅ Browser manager utility
✅ Comprehensive documentation

## 🎓 Learning Path

1. **Understand the structure** - Review this file
2. **Read the GUIDE.md** - Detailed step-by-step guide
3. **Read README.md** - Full documentation
4. **Review features/login.feature** - See example scenarios
5. **Review src/pages/loginPage.js** - See POM pattern
6. **Review src/steps/loginSteps.js** - See step implementation
7. **Run: npm test** - Execute the tests
8. **Create your own feature** - Practice by writing new scenarios

## 🔐 Security Notes

- ⚠️ Do NOT commit `.env` file with real credentials
- ✅ Use `.env.example` template
- ✅ Use CI/CD secrets for sensitive data
- ✅ Test data in features is for demo purposes

## 📞 Support Files

- **README.md** - Overview and installation guide
- **GUIDE.md** - Detailed usage guide with examples
- **This file** - Project structure reference
