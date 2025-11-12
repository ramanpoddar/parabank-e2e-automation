# 📋 ParaBank BDD Framework - File Index

## 📖 Documentation Files (Read These First!)

| File | Purpose | Time |
|------|---------|------|
| **README.md** | Comprehensive overview, installation, features | 5-10 min |
| **QUICK_START.md** | Quick setup guide and commands | 2-3 min |
| **GUIDE.md** | Detailed step-by-step usage guide | 10-15 min |
| **PROJECT_STRUCTURE.md** | Project structure and file organization | 5 min |
| **SETUP_COMPLETE.md** | Setup completion summary | 3 min |

### 📚 Reading Order
1. Start with **QUICK_START.md** (2-3 minutes)
2. Then read **README.md** (5-10 minutes)
3. Explore **GUIDE.md** for examples (10-15 minutes)
4. Reference **PROJECT_STRUCTURE.md** as needed

---

## 🧪 Test Code Files

### Feature Files (BDD Scenarios)
```
features/
├── login.feature            ✅ Login & logout scenarios
└── registration.feature     📝 Registration scenarios (WIP)
```

### Page Objects (UI Interactions)
```
src/pages/
├── basePage.js              🎯 Base class for all pages
├── loginPage.js             🔐 Login page interactions
└── dashboardPage.js         📊 Dashboard interactions
```

### Step Definitions
```
src/steps/
├── hooks.js                 🪝 Before/After setup
└── loginSteps.js            👣 Login feature steps
```

### Utilities
```
src/utils/
└── browserManager.js        🌐 Browser management
```

### Configuration
```
src/config/
└── config.js                ⚙️ Test configuration
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| **cucumber.js** | Cucumber test runner config |
| **package.json** | Project dependencies & npm scripts |
| **playwright.config.js** | Playwright browser config |
| **.gitignore** | Git ignore rules |
| **.env.example** | Environment variables template |

---

## 📦 Directory Structure

```
parabank-e2e-automation/
│
├── features/                    # Gherkin feature files
│   ├── login.feature
│   └── registration.feature
│
├── src/                         # Source code
│   ├── config/
│   │   └── config.js
│   ├── pages/
│   │   ├── basePage.js
│   │   ├── loginPage.js
│   │   └── dashboardPage.js
│   ├── steps/
│   │   ├── hooks.js
│   │   └── loginSteps.js
│   └── utils/
│       └── browserManager.js
│
├── screenshots/                 # Auto-saved screenshots
├── test-results/                # Test reports (HTML & JSON)
│
├── cucumber.js
├── package.json
├── playwright.config.js
├── .gitignore
├── .env.example
│
├── README.md
├── QUICK_START.md
├── GUIDE.md
├── PROJECT_STRUCTURE.md
├── SETUP_COMPLETE.md
└── FILE_INDEX.md (this file)
```

---

## 🚀 Quick Commands

```bash
# Installation
npm install

# Run Tests
npm test                    # Default
npm run test:headed         # With browser visible
npm run test:firefox        # Firefox browser
npm run test:webkit         # Safari browser
npm run test:chromium       # Chrome browser
npm run test:debug          # Debug mode

# View Reports
test-results/cucumber-report.html   # HTML report
test-results/cucumber-report.json   # JSON report
```

---

## 📝 File Descriptions

### features/login.feature
**Type:** Gherkin Feature File  
**Contains:** Login and logout test scenarios  
**Status:** ✅ Complete with 3 scenarios  
**Used By:** Cucumber test runner

### features/registration.feature
**Type:** Gherkin Feature File  
**Contains:** Registration test scenarios  
**Status:** 📝 Work In Progress (marked with @wip tags)  
**Used By:** Future registration tests

### src/pages/basePage.js
**Type:** JavaScript Page Object  
**Contains:** Common methods used by all pages (click, fill, wait, etc.)  
**Methods:** 8+ utility methods  
**Used By:** All other page objects  
**Pattern:** Base class inheritance

### src/pages/loginPage.js
**Type:** JavaScript Page Object  
**Contains:** Login page specific methods and locators  
**Methods:** 10+ page-specific methods  
**Used By:** loginSteps.js  
**Extends:** BasePage

### src/pages/dashboardPage.js
**Type:** JavaScript Page Object  
**Contains:** Dashboard page specific methods  
**Methods:** 4+ dashboard methods  
**Used By:** loginSteps.js  
**Extends:** BasePage

### src/steps/hooks.js
**Type:** Cucumber Hooks  
**Contains:** Before and After scenario setup/teardown  
**Features:** Screenshot on failure, browser cleanup  
**Used By:** Cucumber before each scenario

### src/steps/loginSteps.js
**Type:** Cucumber Step Definitions  
**Contains:** Implementation of login feature steps  
**Methods:** 10+ step implementations  
**Used By:** Cucumber test runner  
**Maps To:** login.feature scenarios

### src/utils/browserManager.js
**Type:** JavaScript Utility Class  
**Contains:** Browser lifecycle management  
**Pattern:** Singleton  
**Methods:** Launch, navigate, close, access page/context/browser  
**Used By:** Step definitions and hooks

### src/config/config.js
**Type:** JavaScript Configuration  
**Contains:** Test configuration settings  
**Settings:** Browser type, timeouts, headless mode, slowMo  
**Used By:** browserManager.js  
**Modifiable:** Update for different configurations

### cucumber.js
**Type:** Cucumber Configuration  
**Contains:** Test runner configuration  
**Settings:** Feature path, step path, reporters, parallel workers  
**Executable:** By `npm test`

### package.json
**Type:** NPM Configuration  
**Contains:** Project metadata, dependencies, scripts  
**Scripts:** 6 different test execution commands  
**Dependencies:** @cucumber/cucumber, @playwright/test  
**Updated:** With all necessary dependencies and scripts

### playwright.config.js
**Type:** Playwright Configuration  
**Contains:** Browser settings, trace, screenshots, reporters  
**Applies To:** All test execution through npm scripts  
**Customizable:** Modify for project needs

### .gitignore
**Type:** Git Configuration  
**Contains:** Files and folders to ignore in version control  
**Ignores:** node_modules, test-results, screenshots, .env, logs

### .env.example
**Type:** Environment Variables Template  
**Contains:** Example environment configuration  
**Copy As:** .env (not included for security)  
**Variables:** Browser, URL, timeout, workers, etc.

### README.md
**Type:** Documentation  
**Contains:** Project overview, features, setup guide, commands  
**Length:** Comprehensive (best practices, tips, resources)  
**Audience:** All team members

### QUICK_START.md
**Type:** Documentation  
**Contains:** Quick start guide and summary  
**Length:** Concise  
**Audience:** New team members in a hurry

### GUIDE.md
**Type:** Documentation  
**Contains:** Step-by-step detailed usage guide with examples  
**Length:** Detailed  
**Audience:** Developers learning the framework

### PROJECT_STRUCTURE.md
**Type:** Documentation  
**Contains:** Project structure explanation and learning path  
**Length:** Medium  
**Audience:** Developers understanding organization

### SETUP_COMPLETE.md
**Type:** Documentation  
**Contains:** Setup completion summary and next steps  
**Length:** Summary  
**Audience:** Anyone wanting overview

---

## 🎯 File Dependencies

```
cucumber.js
  └─► src/steps/loginSteps.js
      ├─► src/pages/loginPage.js
      │   └─► src/pages/basePage.js
      ├─► src/pages/dashboardPage.js
      │   └─► src/pages/basePage.js
      ├─► src/utils/browserManager.js
      │   └─► src/config/config.js
      └─► features/login.feature
```

---

## 📊 Statistics

| Category | Count |
|----------|-------|
| Feature Files | 2 |
| Page Objects | 3 |
| Step Files | 2 |
| Utilities | 1 |
| Configuration Files | 5 |
| Documentation Files | 5 |
| **Total Files** | **18** |

| Category | Count |
|----------|-------|
| Step Definitions | 11 |
| Page Methods | 20+ |
| Utility Methods | 12+ |
| **Total Methods** | **43+** |

---

## ✨ Features Implemented

✅ Page Object Model (POM)  
✅ Cucumber BDD Framework  
✅ Playwright Browser Automation  
✅ Cross-browser Testing  
✅ Before/After Hooks  
✅ Configuration Management  
✅ Screenshot on Failure  
✅ Test Reporting (HTML & JSON)  
✅ Parallel Test Execution  
✅ Comprehensive Documentation  

---

## 🔍 Where to Find Things

### **I want to...**

**...run tests**
→ Use commands in README.md or QUICK_START.md

**...understand the framework**
→ Read GUIDE.md

**...know the project structure**
→ Check PROJECT_STRUCTURE.md

**...modify test configuration**
→ Edit `src/config/config.js` or `cucumber.js`

**...add a new feature**
→ Create `.feature` file in `features/` folder

**...add a new step**
→ Add to `src/steps/loginSteps.js` or create new step file

**...interact with a new page**
→ Create new file in `src/pages/` extending `basePage.js`

**...debug a failing test**
→ Run `npm run test:headed` or `npm run test:debug`

**...view test results**
→ Open `test-results/cucumber-report.html`

**...understand page objects**
→ Study `src/pages/loginPage.js`

**...understand step definitions**
→ Study `src/steps/loginSteps.js`

**...understand hooks**
→ Study `src/steps/hooks.js`

---

## 🎓 Learning Resources

1. **Getting Started** (30 minutes)
   - Read: QUICK_START.md
   - Read: README.md
   - Run: `npm install && npm test:headed`

2. **Understanding Code** (45 minutes)
   - Read: GUIDE.md
   - Study: features/login.feature
   - Study: src/pages/loginPage.js
   - Study: src/steps/loginSteps.js

3. **Writing Tests** (1-2 hours)
   - Create new .feature file
   - Write step definitions
   - Create page objects
   - Run tests

4. **Advanced** (as needed)
   - Customize configuration
   - Add more page objects
   - Integrate with CI/CD
   - Add custom utilities

---

## 🔗 External Resources

- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [Playwright Documentation](https://playwright.dev/)
- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [ParaBank Application](https://parabank.parasoft.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

## ✅ Pre-flight Checklist

Before running tests:
- [ ] Node.js installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Dependencies installed (`npm install`)
- [ ] Internet connection available
- [ ] Port 3000+ available

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| "Module not found" | Run `npm install` |
| "Tests not running" | Check `cucumber.js` path settings |
| "Browser not launching" | Try `npm run test:headed` to see error |
| "Cannot find ParaBank" | Check internet, app might be down |
| "Port already in use" | Close other applications or restart |

---

## 📞 Need Help?

**Consult these files in order:**
1. QUICK_START.md (for quick answers)
2. README.md (for general info)
3. GUIDE.md (for detailed examples)
4. Code comments (for implementation details)

---

**Last Updated:** November 12, 2025  
**Framework Version:** 1.0.0  
**Status:** ✅ Ready to Use
