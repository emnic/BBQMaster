testDevice1 = {'id':'1234',
  			   'type': 'temperature',
			   'name':'Grill',
			   'currentTemp': 57,
			   'targetTemp':70};

testDevice2 = {'id':'4321',
			   'type': 'temperature',
			   'name':'Meat 1',
			   'currentTemp': 60,
			   'targetTemp':79};

testDevice3 = {'id':'4444',
			   'type': 'temperature',
			   'name':'Meat 2',
			   'currentTemp': 20,
			   'targetTemp':99};

testTimer1 = {'id': '6666',
			  'type': 'timer',
			  'name': 'TestTimer',
			  'elapsedTime': '20:35:15',
			  'timeLeft': '00:03:14'}

testDevices = [testDevice1, testDevice2, testDevice3, testTimer1];

angular.module('app.services', [])

.factory('devicesService', [function(){
  return {devices: testDevices
  }
}])

.service('deviceService', [function(){
	console.log(this.selectedDevice)
	this.selectedDevice;
}])

.service('BlankService', [function(){

}]);