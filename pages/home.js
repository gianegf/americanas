var action = require('../common/form-actions');
var EC = protractor.ExpectedConditions;

var HomePage = function () {

    var url = 'https://www.americanas.com.br/';
    // - "Navbar"
    this.linkLogoHome = element(by.id('brd-link'));
    this.userActionsCard = element(by.id('h_usr-link'));
    this.linkRegister = element(by.className('usr-signup'));
    this.linkBasquetCard = element(by.className('crt-link'));
    this.linkToBasket = element(by.className('crt-basquet'));
    this.linkLogout = element(by.className('usr-signout'));
    //  -- Search related
    this.inputSearch = element(by.id('h_search-input'));
    this.btnSearch = element(by.id('h_search-btn'));
    this.searchTitle = element(by.className('h1 page-title'));
    this.searchResultNumber = element(by.cssContainingText('span','produtos'));
    // - Shopping related
    this.productLink = element(by.className('card-product-url'));
    this.btnBuy = element(by.id('btn-buy'));
    this.btnContinue = element(by.id('btn-continue'));
    this.totalShopped = element(by.className('summary-total')).element(by.cssContainingText('span','R$ '));
    this.installments = element(by.className('summary-totalInstallments')); 

    this.getHomePage = function() {
        browser.get(url);
    }

    this.addProductToBasquet = function(value) {
        action.fill(this.inputSearch, value);
        this.btnSearch.click();
        browser.wait(EC.presenceOf(this.searchTitle), 6000);
        this.productLink.click();
        this.btnBuy.click();
        this.btnContinue.click();
    }

};

module.exports = new HomePage();