import type { Options } from "@wdio/types";
export const config: Options.Testrunner = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/specs/**/*.ts'
  ],
  exclude: [],

  // ============
  // Capabilities
  // ============
  maxInstances: 5,
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--disable-infobars', '--window-size=1280,800']
      }
    },
    // Uncomment this section to add Firefox support
    /*
    {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless']
        }
    },
    */
  ],

  // ===================
  // Test Configurations
  // ===================
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://conduit.realworld.how/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // // Test Runner Services
  // services: [
  //   'selenium-standalone', // Add 'selenium-standalone' if using Firefox
  // ],

  // Framework
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],

  // Mocha options
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

};
