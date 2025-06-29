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
git clone https://github.com/your-username/BDD_POM_Assignment_AJ.git
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
```

### Run Only Mobile Tests
```bash
npm run test:mobile
```

---

## 📊 Generate & Open Allure Report

```bash
npm run allure:generate
npm run allure:open
```

> Make sure `allure` is installed via `npm i -g allure-commandline` or run with `npx`.

---

## 🧪 Scripts in `package.json`

```json
"scripts": {
  "test:all": "npx codeceptjs run --features",
  "test:web": "npx codeceptjs run --features --grep @web",
  "test:mobile": "npx codeceptjs run --features --grep @mobile",
  "allure:generate": "npx allure generate output/allure-results --clean -o output/allure-report",
  "allure:open": "npx allure open output/allure-report"
}
```

---

## 🧠 Best Practices Followed

- 🔄 Page Object Model (POM) for reusability and clarity
- 🧱 Modular steps and selectors
- 🏷️ Tag-based scenario execution (`@web`, `@mobile`)
- 🖼️ Screenshots & Allure for debugging and reporting
- 🌐 Window resizing logic in `Before()` hook
