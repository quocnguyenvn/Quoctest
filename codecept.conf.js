exports.config = {
  tests: 'test/features/*',
  output: './test/output',
  helpers: {
    Playwright: {
      show: true,
      browser: 'firefox', // chromium, firefox, webkit, electron
      windowSize: '1366x768',
    },
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  include: {
    I: './test/steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  gherkin: {
    features: './test/features/*.feature',
    steps: './test/step_definitions/*.js',
  },
};
