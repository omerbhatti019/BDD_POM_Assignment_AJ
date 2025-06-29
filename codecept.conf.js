const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com',
      browser: 'chrome',
      restart: false,
      windowSize: 'maximize',
    }
  },
  include: {
    homePage: './pages/HomePage.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output/allure-results'
    }
  },
  name: 'BDD_POM_Assignment_AJ'
};
