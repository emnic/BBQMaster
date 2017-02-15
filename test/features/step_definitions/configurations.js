var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);
var expect = chai.expect;

module.exports = function() {
    this.Given(/^I'm in the settings menu for devices$/, function (callback) {
     browser.get('http://localhost:8100/#/page1/dashboarddevices');
     expect(browser.getTitle()).to.eventually.equal('Dashboard Devices').and.notify(callback);
    });

    this.Given(/^there is an option to add a new device$/, function (callback) {
        element(by.linkText('Add Device'));
        callback();
    });

    this.When(/^I click the button to add a new device$/, function (callback) {
        element(by.linkText('Add Device')).click().then(function(){
          callback();
        });
    });


    this.When(/^input all nessescary information and press save$/, function (callback) {
        var device_name = element(by.id('deviceName'));
        device_name.sendKeys('TestDevice1');
        element(by.linkText('Save')).click();
        expect(browser.getTitle()).to.eventually.equal('Dashboard Devices').and.notify(callback);
    });

    this.Then(/^the new device is added and displayed on the settings devices dashboard$/, function (callback) {
        var myText = "TestDevice1";
        var selectedElement = element(by.xpath("//*[. = '" + myText + "']"));

        expect(selectedElement.isPresent()).to.eventually.equal(true, "This text is not present in page.").and.notify(callback);
    });
}