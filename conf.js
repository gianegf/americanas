// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 110000,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--lang=pt-BR'],
    },
  },
  suites: {
    parte1: ['./task/parte1.spec.js'],
    parte2: ['./task/parte2.spec.js'],
  },
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    global.using = require('./utils/data-provider');
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({ resultsDir: 'allure-results' }));
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  }
};