
var FormActions = function () {

    let field, value;

    this.fill = function(field, value) {
        //field.clear();  
        field.sendKeys(value);
    };

    this.getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

};

module.exports = new FormActions();