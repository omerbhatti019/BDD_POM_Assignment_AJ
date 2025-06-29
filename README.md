# 🧪 CodeceptJS BDD Automation with WebDriverIO & Allure

This project automates the web testing using **CodeceptJS** with **WebDriverIO**, **BDD (Cucumber)** for feature-based scenarios, and **Allure** for beautiful test reports.

## 📁 Project Structure

BDD_POM_Assignment_AJ/
│
├── features/                  # Gherkin feature files
│   ├── home.feature
│   ├── livestream.feature
│
├── pages/                     # Page Object files
│   ├── CommonMethods.js
│   ├── HomePage.js
│   ├── LiveStreamPage.js
│
├── step_definitions/          # Step definitions for BDD
│   ├── homepageSteps.js
│   ├── livestreamSteps.js
│
├── output/                    # Allure reports & logs
│   ├── allure-results/
│   ├── allure-report/
│   └── ...
│
├── codecept.conf.js           # CodeceptJS configuration file
├── package.json               # Project dependencies and scripts
└── README.md                  # Documentation

