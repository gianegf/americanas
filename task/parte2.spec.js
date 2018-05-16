var homePage = require('../pages/home');
var registerPage = require('../pages/register');
var action = require('../common/form-actions');
var form = require('../common/form-validation');
var userData = require('../data-support/data.user.json');
var counter = 1234567;
var EC = protractor.ExpectedConditions;

describe('Parte 2: ', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false); //Needed because Protractor is working on a non-angular page
        homePage.getHomePage();
        homePage.userActionsCard.click();
        homePage.linkRegister.click();
        registerPage.registerNewUser('teste'+(counter+action.getRandomInt(1,900))+'@hotmail.com');
        browser.driver.sleep(3000);
        expect(browser.getCurrentUrl()).toBe('https://www.americanas.com.br/');
    });

    // afterEach(() => {
    //     homePage.userActionsCard.click();
    //     homePage.linkLogout.click();
    // });

    it('Full scenario', () => {
        homePage.addProductToBasquet('Moto G6');
        element(by.className('form-control select__quantity')).element(by.cssContainingText('option', '2')).click();
        homePage.installments.getText().then(function(text) { 
            console.log('>>> Condições de parcelamento: ' + text);
            var number = text.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
            expect(number).toBeGreaterThan(9);
        });
        homePage.totalShopped.getText().then(function(text) { 
            console.log('>>> Valor total dos produtos na cesta: ' + text);
            var total = parseFloat(text.match(/[+-]?\d+(?:\.\d+)?/g).map(Number));
            console.log('>>> Total parsed = ' + total);
            expect(total).toBeLessThan(5.000);
        });
    });

});