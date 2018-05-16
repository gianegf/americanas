var homePage = require('../pages/home');
var registerPage = require('../pages/register');
var action = require('../common/form-actions');
var form = require('../common/form-validation');
var userData = require('../data-support/data.user.json');
var EC = protractor.ExpectedConditions;

describe('Parte 1: ', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false); //Needed because Protractor is working on a non-angular page
        homePage.getHomePage();
        homePage.userActionsCard.click();
        homePage.linkRegister.click();
        browser.driver.sleep(5000);
    });

    it('Check if Register page is displayed', () => {
        expect(browser.getCurrentUrl()).toBe('https://cliente.americanas.com.br/simple-login/cadastro/pf?next=https%3A%2F%2Fwww.americanas.com.br%2F');
    })

    using(userData.userWithRegisteredEmail , (data) => {
        it('Check if Already Registered Email message is displayed', () => {
            action.fill(registerPage.inputEmail, data.email);
            action.fill(registerPage.inputPassword, data.password);
            action.fill(registerPage.inputCPF, data.cpf);
            action.fill(registerPage.inputName, data.name);
            action.fill(registerPage.inputBirthday, data.birthday);
            registerPage.labelFemaleGender.click();
            action.fill(registerPage.inputPhone, data.phone);
            registerPage.btnRegister.click();
            browser.wait(EC.presenceOf(registerPage.errorMsg), 5500);
            form.isItDisplayed(registerPage.errorMsg);
            form.checkMessage(registerPage.errorMsg, 'E-mail já cadastrado');
        });
    }); 

    it('Check if weak password + lengh message is displayed', () => {
        action.fill(registerPage.inputPassword, 'A@');
        registerPage.btnRegister.click();
        browser.wait(EC.presenceOf(registerPage.passwordErrorMsg), 5000);
        form.isItDisplayed(registerPage.passwordErrorMsg);
        form.checkMessage(registerPage.passwordErrorMsg, 'Senha precisa ter entre 6 a 50 caracteres.');
    });

    using(userData.userWithInvalidCPF , (data) => {
        it('Check if Already Registered Email message is displayed', () => {
            action.fill(registerPage.inputEmail, data.email);
            action.fill(registerPage.inputPassword, data.password);
            action.fill(registerPage.inputCPF, data.cpf);
            action.fill(registerPage.inputName, data.name);
            action.fill(registerPage.inputBirthday, data.birthday);
            registerPage.labelMaleGender.click();
            action.fill(registerPage.inputPhone, data.phone);
            registerPage.btnRegister.click();
            browser.wait(EC.presenceOf(registerPage.errorMsg), 5000);
            form.isItDisplayed(registerPage.errorMsg);
            form.checkMessage(registerPage.errorMsg, 'Campo inválido');
        });
    }); 

});