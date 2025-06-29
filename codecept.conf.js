const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 15, //time in seconds
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com',
      browser: 'chrome',
      waitForTimeout: 5000, // in milliseconds
      restart: false,
      windowSize: 'maximize',
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--disable-gpu',
            '--window-size=1920,1080'
            // Do NOT include '--headless'
          ]
        }
    }
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
