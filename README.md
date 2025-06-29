# 🧪 CodeceptJS BDD Automation with WebDriverIO & Allure

This project automates web testing using **CodeceptJS** with **WebDriverIO**, **BDD (Cucumber)** for behavior-driven development, and **Allure Reports** for detailed reporting.

---

## 📁 Project Structure

```
BDD_POM_Assignment_AJ/
├── features/                # Gherkin feature files
│   ├── home.feature
│   ├── livestream.feature
│
├── pages/                   # Page Object files (POM)
│   ├── CommonMethods.js
│   ├── HomePage.js
│   ├── LiveStreamPage.js
│
├── step_definitions/        # Step definitions for BDD steps
│   ├── homepageSteps.js
│   ├── livestreamSteps.js
│
├── output/                  # Allure results & screenshots
│   ├── allure-results/
│   ├── allure-report/
│
├── codecept.conf.js         # CodeceptJS configuration
├── package.json             # Project dependencies & test scripts
└── README.md                # Documentation (this file)
```

---

## 🚀 Technologies Used

- ✅ **CodeceptJS** – End-to-end test framework
- ✅ **WebDriverIO** – WebDriver-based automation engine
- ✅ **Cucumber.js** – BDD Gherkin syntax for feature files
- ✅ **Allure** – Test report generation
- ✅ **Node.js** – Runtime environment for JavaScript

---

## 📦 Installation

```bash
git clone <repo-url>
cd BDD_POM_Assignment_AJ
npm install
```

---

## ✅ Running Tests

### Run All Scenarios
```bash
npm run test:all
```

### Run Only Web Tests
```bash
npm run test:web
npm run web:report // run tests and generate report for web scenarios
```

### Run Only Mobile Tests
```bash
npm run test:mobile
npm run mobile:report // run tests and generate report for mobile scenarios
```

---

## 📊 Generate & Open Allure Report Manually

```bash
npm run allure:generate 
npm run allure:open
```

> Make sure `allure` is installed via `npm i -g allure-commandline` or run with `npx`.
NOTE: Make sure `allure-legacy` is installed via `npm i --save-dev @codeceptjs/allure-legacy' g allure-commandline` // used for BDD reporting 


---

## 🧪 Scripts in `package.json`

```json
"scripts": {
    "test:all": "npx codeceptjs run --features",
    "test:web": "npx codeceptjs run --features --grep @web",
    "test:mobile": "npx codeceptjs run --features --grep @mobile",
    "allure:generate": "npx allure generate output/allure-results --clean -o output/allure-report",
    "allure:open": "npx allure open output/allure-report",
    "mobile:report": "npm run clean:allure && npm run test:mobile && npm run allure:generate && npm run allure:open",
    "web:report": "npm run clean:allure && npm run test:web && npm run allure:generate && npm run allure:open",
    "clean:allure": "rimraf output/allure-results output/allure-report"
}
```

---

## 🧠 Best Practices Followed

- 🔄 Page Object Model (POM) for reusability and clarity
- 🧱 Modular steps and selectors
- 🏷️ Tag-based scenario execution (`@web`, `@mobile`)
- 🖼️ Screenshots & Allure for debugging and reporting

## 🧪 Writing New Tests

1. Add a new `.feature` file under the `features/` folder.
2. Add step definitions for new steps under `step_definitions/`.
3. Reuse or create new Page Object functions under `pages/`.

Example Feature Snippet:
```gherkin
@web
Scenario: Validate Homepage Loads
  Given I am on the home page
  Then I should see the site logo
```

---

## 🛠️ Troubleshooting

### Allure Report Not Generated

- Ensure the `output/allure-results/` directory is created after tests.
- Check if the `allure` plugin is enabled in `codecept.conf.js`.
- Run:
  ```bash
  npx allure generate output/allure-results --clean -o output/allure-report
  ```

### Common Errors

| Error                                  | Solution                                                |
|----------------------------------------|---------------------------------------------------------|
| `allure: command not found`            | Install globally with `npm i -g allure-commandline`     |
| `locator.replace is not a function`    | Pass string locators (like `'.selector'`) properly      |

---

## 💡 Tips

- Use `@web` and `@mobile` tags in feature files to filter test runs.
- Use `I.waitForVisible` and `I.scrollTo` for better stability.
- Always assert with meaningful error messages using `assert.strictEqual`.


