var chai = require('chai');
var chai_as_promised = require('chai-as-promised');
var request = require('request');
chai.use(chai_as_promised);
var expect = chai.expect;
var url = 'http://localhost:30302/';

module.exports = function() {
    this.Given(/^the app is connected to server$/, function (callback) {
        request(url + 'connectionstatus', function (error, response, body) {

          expect(body).to.equal('The server is alive');
        });

        callback();
    });

    this.Given(/^the temperature has changed to "([^"]*)" degrees at the sensor$/, function (temp, callback) {
        this.nextResponse = temp;

        request({
            url: url + 'nextresponse',
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            body: {nextResponse: temp}
        }, 
        function(error, response, body) {
            expect(body).to.equal('The following response was received: ' + temp);
        });

        callback();
    });

    this.When(/^the app is requesting an temperature update from the server$/, {timeout: 60*1000}, function (callback) {        
        var nextR = this.nextResponse;
        var retries = 20;
        var counter = 1;
        
        // Check if app has fetched the value from the server
        function checkFlag() {
            request(url + 'nextresponsefetched', function (error, response, body) {
                if (counter === retries){
                    counter = 0;
                    callback();                        
                }
                else if(JSON.parse(body).nextResponseFetched === true){
                    counter = 0;
                    callback();                    
                }
                else{
                    setTimeout(checkFlag, 1000);
                    counter += 1;
                }                
            });
        }
        checkFlag();
        
    }); 

    this.Then(/^the temperature in the device dashboard is updated with the same value$/, function (callback) {
        browser.get('http://localhost:8100/#/page1/dashboard');
        expect(browser.getTitle()).to.eventually.equal('Dashboard');

        var devices = element.all(by.repeater('device in devices'));

        var firstDevice = devices.get(0).element(by.id('currentTemp'))

        var nextResponse = this.nextResponse;
            
        firstDevice.getText('value').then(function(temperature) {
            expect(temperature).to.equal(nextResponse);
            callback();   
        });
    });     
}


