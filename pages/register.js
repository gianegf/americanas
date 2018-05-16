
var action = require('../common/form-actions');
var form = require('../common/form-validation');
var homePage = require('../pages/home');

var RegisterPage = function () {

    this.inputEmail = element(by.id('email-input'));
    this.inputPassword = element(by.id('password-input'));
    this.inputCPF = element(by.id('cpf-input'));
    this.inputName = element(by.id('name-input'));
    this.inputBirthday = element(by.id('birthday-input'));
    this.labelFemaleGender = element(by.cssContainingText('label','Feminino'));
    this.labelMaleGender = element(by.cssContainingText('label','Masculino'));
    this.inputPhone = element(by.id('phone-input'));
    this.btnRegister = element(by.className('cadastroForm-submit'));
    this.errorMsg = element(by.className('inputGroup-error '));
    this.passwordErrorMsg = element(by.className('--addOn'));

    this.getRegisterPage = function() {
        homePage.getHomePage();
        homePage.userActionsCard.click();
        homePage.linkRegister.click();
        browser.driver.sleep(5000);
    }

    this.registerNewUser = function(email) {
        action.fill(this.inputEmail, email);
        action.fill(this.inputPassword, 'Senha!1234');
        action.fill(this.inputCPF, '969.216.271-01');
        action.fill(this.inputName, 'New User');
        action.fill(this.inputBirthday, '12091981');
        action.fill(this.inputPhone, '19992334455');
        this.labelFemaleGender.click();
        this.btnRegister.click();
    }

};

module.exports = new RegisterPage();