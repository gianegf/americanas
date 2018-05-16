# americanas

## Set up

Follow the order

Run `npm install` to install dev dependences.
Run `npm i -g protractor` to install protractor.
Run `protractor --version` to check.
Run `webdriver-manager update` to update browser binaries.
Run `npm i -g allure-commandline` to install protractor.


## Running e2e tests

Run `webdriver-manager start` to start Selenium Server.
Run `protractor conf.js --suite parte1` to run tests of Parte1 suite.
Run `protractor conf.js --suite parte2` to run tests of Parte2 suite.

## Generating report

The report is built in two parts. First, xml files generation and second, html report generation.

First part: Jasmine-allure-reporter generates .xml files from test execution. To create a new report, always, run the tests first. The files are stored in the Allure-results directory.

Second part: 
Run `allure serve` to generate html report. 
It will automatically open in your browser.

IMPORTANT: Due to sync and timeout issues running the tests, this project already contains the files of a sucessfull test execution. After clone the project and run the Set up session, run `allure serve` to check the report.


## Further help

Please find me on Skype @gianegianotto or send me an email gianegf@gmail.com
