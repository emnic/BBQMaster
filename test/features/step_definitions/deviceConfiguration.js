var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect = chai.expect;

module.exports = function() {
    this.Given(/^the device dashboard is displayed$/, function (callback) {
        browser.get('http://localhost:8100/#/page1/dashboard');
        expect(browser.getTitle()).to.eventually.equal('Dashboard').and.notify(callback);
    });

    this.Given(/^the temperature sensor config menu is displayed$/, function (callback) {
        var devices = element.all(by.repeater('device in devices'));

        devices.get(0).element(by.id('dashboard-button1')).click();

        expect(browser.getTitle()).to.eventually.equal('Edit Temperature').and.notify(callback);
    });  

    this.When(/^I click on the target temperature$/, function (callback) {
        element(by.id('temp-input')).click().then(function(){
            callback();
        });
    });

    this.Then(/^it is possible to manually input the desired temperature$/, function (callback) {
        var temp_input = element(by.id('temp-input'));
        var targetTemp = 99;

        temp_input.sendKeys(targetTemp);
        element(by.linkText('Save')).click();
        expect(browser.getTitle()).to.eventually.equal('Dashboard').and.notify(callback);
    });

    this.When(/^I adjust the slider$/, function (callback) {
        var slider = element(by.id('temp-slider'));

        browser.actions().dragAndDrop(
            slider,
            {x:200, y:0}
        ).perform();

        callback();
    });

    this.Then(/^the temperature is updated$/, function (callback) {
        var slider = element(by.id('temp-slider'));
        var temp_input = element(by.id('temp-input'));

        slider.getAttribute('value').then(function(sliderValue) {
            expect(temp_input.getAttribute('value')).to.eventually.equal(sliderValue).and.notify(callback);   
        });
    });                                  
}