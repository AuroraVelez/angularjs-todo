var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var browsers = {
    firefox: {
        name: 'Firefox',
        browserName: 'firefox'
    },
    chrome: {
        name: 'Chrome',
        browserName: 'chrome'
    },
    ios: {
        name: 'iOS 7 - iPad',
        platformName: 'iOS',
        platformVersion: '8.1',
        deviceName: 'iPad Retina',
        browserName: 'Safari'
        //orientation: 'landscape'
    }
};

var config = {
      allScriptsTimeout: 11000,

      specs: [
            "e2e/**/*spec.js"
      ],

      capabilities: {
            'browserName': 'chrome'
      },

      baseUrl: 'http://localhost:8000',

      framework: 'jasmine',

      jasmineNodeOpts: {
              // onComplete will be called just before the driver quits.
              //onComplete: null,
              // If true, display spec names.
              isVerbose: true,
              // If true, print colors to the terminal.
              showColors: true,
              // If true, include stack traces in failures.
              includeStackTrace: false,
              // Default time to wait in ms before a test fails.
              defaultTimeoutInterval: 10000
      },
      onPrepare: function() {
          jasmine.getEnv().addReporter(
              new Jasmine2HtmlReporter({
                  savePath: './tests/e2e/results/',
                  screenshotsFolder: 'screenshots',
                  takeScreenshots: true

              })
          );
          var wd = require('wd'),
              protractor = require('protractor'),
              wdBridge = require('wd-bridge')(protractor, wd);
          wdBridge.initFromProtractor(exports.config);
      }
};


if (process.argv[3] === '--chrome') {
    config.capabilities = browsers.chrome;
} else if (process.argv[3] === '--ios') {
    config.seleniumAddress = 'http://localhost:4723/wd/hub';
    config.capabilities = browsers.ios;
} else {
    config.multiCapabilities = [
        browsers.firefox,
        browsers.chrome
    ]
}

exports.config = config;