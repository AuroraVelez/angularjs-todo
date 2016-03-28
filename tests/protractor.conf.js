var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
      allScriptsTimeout: 11000,

      specs: [
            "e2e/**/*spec.js"
      ],

      capabilities: {
            'browserName': 'chrome'
      },

      baseUrl: 'http://localhost:8000/app/',

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
                  savePath: './e2e/results',
                  screenshotsFolder: 'images',
                  takeScreenshots: true

              })
          );
      }
};
