# 🎯 ParaBank BDD Framework - Quick Reference Card

## 🚀 Getting Started (2 minutes)

```bash
# Navigate to project
cd c:\Project_Datamatics\Learnings\parabank-e2e-automation

# Install dependencies
npm install

# Run tests
npm test

# View results
test-results/cucumber-report.html
```

---

## 📝 Test Commands Cheat Sheet

```bash
npm test                    # Run all tests (default)
npm run test:headless       # Headless mode (faster)
npm run test:headed         # See browser in action
npm run test:firefox        # Test in Firefox
npm run test:webkit         # Test in Safari
npm run test:chromium       # Test in Chrome
npm run test:debug          # Debug mode
```

---

## 🏗️ Project Structure at a Glance

```
parabank-e2e-automation/
├── features/               Feature files (.feature)
├── src/
│   ├── config/            Configuration
│   ├── pages/             Page Objects
│   ├── steps/             Step Definitions
│   └── utils/             Utilities
├── screenshots/           Failed test screenshots
├── test-results/          HTML & JSON reports
└── Documentation files    README, GUIDE, etc.
```

---

## 👤 Test Credentials

```
Username: john
Password: demo
URL: https://parabank.parasoft.com/parabank/index.htm
```

---

## 📚 Documentation Quick Links

| Document | What It's For | Read Time |
|----------|--------------|-----------|
| **QUICK_START.md** | Fast setup overview | 2-3 min |
| **README.md** | Full documentation | 5-10 min |
| **GUIDE.md** | Step-by-step tutorials | 10-15 min |
| **PROJECT_STRUCTURE.md** | File organization | 5 min |
| **FILE_INDEX.md** | All files explained | 5 min |

---

## 🧪 How Tests Work

```
1. Cucumber reads features/login.feature
2. Matches Gherkin steps to step definitions
3. Steps interact with Page Objects
4. Page Objects use browserManager
5. Playwright controls browser
6. Reports generated automatically
```

---

## 🔧 File Types & Their Purposes

| Extension | Where | Purpose | Example |
|-----------|-------|---------|---------|
| `.feature` | features/ | BDD scenarios | login.feature |
| `.js` | src/pages/ | Page interactions | loginPage.js |
| `.js` | src/steps/ | Step implementations | loginSteps.js |
| `.js` | src/utils/ | Helper functions | browserManager.js |
| `.js` | src/config/ | Settings | config.js |

---

## 🎯 Common Tasks

### Run a specific feature
```bash
npx cucumber-js features/login.feature
```

### Run only tests with @focus tag
```bash
npx cucumber-js --tags "@focus"
```

### Skip tests with @skip tag
```bash
npx cucumber-js --tags "not @skip"
```

### Generate reports
```bash
npm test
# Reports in test-results/
```

### Debug a test
```bash
npm run test:debug
# Opens Playwright Inspector
```

---

## 📊 What Gets Created After Tests

```
screenshots/
├── failure-1234567890.png    (Auto-captured on failure)
└── failure-1234567891.png

test-results/
├── cucumber-report.html      (Open in browser)
└── cucumber-report.json      (Machine readable)
```

---

## 🔑 Key Concepts

### Page Object Model (POM)
- Separate UI elements from test logic
- Example: `src/pages/loginPage.js`
- Easier to maintain when UI changes

### Step Definitions
- Connect Gherkin steps to code
- Example: `src/steps/loginSteps.js`
- Keep them simple and readable

### Hooks
- Setup before each test
- Cleanup after each test
- Example: `src/steps/hooks.js`

### Feature Files
- Human-readable test scenarios
- Written in Gherkin language
- Example: `features/login.feature`

---

## 💻 Typical Workflow

```
1. Write feature in features/login.feature
   ↓
2. Run tests (missing steps)
   ↓
3. Create steps in src/steps/
   ↓
4. Run tests again (need page object)
   ↓
5. Create page object in src/pages/
   ↓
6. Run tests (should pass!)
   ↓
7. View report in test-results/
```

---

## 🐛 When Tests Fail

1. **Check screenshots** → `screenshots/` folder
2. **View HTML report** → `test-results/cucumber-report.html`
3. **Run in headed mode** → `npm run test:headed`
4. **Use debug mode** → `npm run test:debug`
5. **Check logs** → Terminal output

---

## 🚨 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| `Cannot find module` | Run `npm install` |
| `Browser not opening` | Try `npm run test:headed` |
| `Test timeout` | Increase timeout in config.js |
| `Element not found` | Check selector, update locators |
| `Network error` | Check internet, check app is up |

---

## 📈 Framework Statistics

- **2** Feature files
- **3** Page objects
- **2** Step files
- **11** Step definitions
- **20+** Page methods
- **12+** Utility methods
- **5** Configuration files
- **5** Documentation files

---

## ✨ What You Can Do With This Framework

✅ **Automate Tests** for ParaBank application  
✅ **Write Scenarios** in easy-to-understand Gherkin  
✅ **Test Multiple Browsers** (Chrome, Firefox, Safari)  
✅ **Run Tests Parallel** for faster execution  
✅ **Generate Reports** automatically  
✅ **Capture Screenshots** on test failures  
✅ **Debug Tests** with Playwright Inspector  
✅ **Maintain Tests** easily with Page Objects  
✅ **Share Code** with team members  
✅ **Integrate with CI/CD** pipelines  

---

## 🎓 Learning Path (3 hours)

| Time | Activity |
|------|----------|
| 5 min | Read QUICK_START.md |
| 10 min | Read README.md |
| 15 min | Review features/login.feature |
| 20 min | Study src/pages/loginPage.js |
| 20 min | Study src/steps/loginSteps.js |
| 10 min | Run `npm test:headed` |
| 30 min | Experiment with code |
| 20 min | Read GUIDE.md for more examples |
| 30 min | Try creating your own test |

---

## 🔗 Useful Links

- 📖 [Cucumber Docs](https://cucumber.io/docs/cucumber/)
- 🌐 [Playwright Docs](https://playwright.dev/)
- 🎭 [Gherkin Guide](https://cucumber.io/docs/gherkin/reference/)
- 🏦 [ParaBank App](https://parabank.parasoft.com/)

---

## 📋 Pre-Test Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Internet connection active
- [ ] ParaBank app is accessible
- [ ] Port 3000+ available

---

## 🎯 Success Indicators

✅ `npm test` runs without errors  
✅ All scenarios pass (green checkmarks)  
✅ Reports generated in test-results/  
✅ No timeout errors  
✅ Browser launches correctly  

---

## 📞 Quick Help

**Q: How do I run tests?**  
A: `npm test`

**Q: How do I see the browser?**  
A: `npm run test:headed`

**Q: Where are the results?**  
A: `test-results/cucumber-report.html`

**Q: How do I debug?**  
A: `npm run test:debug`

**Q: Where's the documentation?**  
A: `README.md`, `GUIDE.md`, `QUICK_START.md`

**Q: How do I add a new test?**  
A: Create `.feature` file, then steps, then page object

**Q: Why is a test failing?**  
A: Check `screenshots/`, `test-results/`, or use headed mode

---

## 🌟 Pro Tips

💡 Use `npm run test:headed` to understand test flow  
💡 Use `npm run test:debug` for interactive debugging  
💡 Check `screenshots/` folder for failure details  
💡 Keep step definitions simple and readable  
💡 Use meaningful page object method names  
💡 Comment your code for clarity  
💡 Review test reports after each run  
💡 Update locators immediately if UI changes  

---

## 🚀 Next Actions

1. Read QUICK_START.md (Right Now!)
2. Run `npm install && npm test:headed`
3. View the tests executing
4. Read GUIDE.md for more details
5. Try modifying a test
6. Create your first new feature

---

**Framework Status:** ✅ Ready to Use  
**Last Updated:** November 12, 2025  
**Version:** 1.0.0  

**Your ParaBank BDD Framework is fully set up and ready to go!** 🚀
