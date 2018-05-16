
var FormValidation = function () {

    let field, msgElement, value, msgText;

    this.checkMessage = function (msgElement, msgText) {
        expect((msgElement).getText()).toBe(msgText);
    }

    this.checkValue = function (field, value) {
        expect(field.getText()).toBe(value);
        console.log(field.getText());
    }
    
    this.isItDisplayed = function (field) {
        expect(field.isDisplayed()).toBe(true);
    }

};

module.exports = new FormValidation();