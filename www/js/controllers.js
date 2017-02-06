
tempSensors = [{'id': 'Sens1'}, {'id': 'Sens2'}, {'id': 'Sens3'}];


Beef = [{'name': 'Beef', 'temp': 50}, {'name': 'Entrecote', 'temp': 35}];
Lamb = [{'name': 'Racks', 'temp': 66}];
Pork = [{'name': 'Porkshops', 'temp' :77}];

meatCategories = [{'categoryName': 'Beef', 'meatList': Beef}, 
				  {'categoryName': 'Lamb', 'meatList': Lamb},
				  {'categoryName': 'Pork', 'meatList': Pork}];


angular.module('app.controllers', [])
  
.controller('dashboardCtrl', ['$scope', '$stateParams', 'devicesService', 'deviceService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, devicesService, deviceService) {
	$scope.devices = devicesService.devices;

	$scope.setDevice = function(device){
		deviceService.selectedDevice = device;
	}

}])
   
.controller('dashboardDevicesCtrl', ['$scope', '$stateParams', 'devicesService', 'deviceService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, devicesService, deviceService) {
	$scope.devices = devicesService.devices;

	$scope.setDevice = function(device){
		deviceService.selectedDevice = device;
	}
}])
   
.controller('graphsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('editTemperatureCtrl', ['$scope', '$stateParams', 'deviceService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, deviceService) {
	$scope.slider = {};
	$scope.meat = {};
	$scope.cat = {};
	$scope.deviceName = deviceService.selectedDevice.name;

	$scope.slider.value = deviceService.selectedDevice.targetTemp;

	$scope.meatCategories = meatCategories;

	$scope.setTemp = function(temp){
		$scope.slider.value = temp;
	}

	$scope.clearMeatSelections = function(){
		$scope.cat.meatCat = '';
	}
	$scope.save = function(){
		deviceService.selectedDevice.targetTemp = $scope.slider.value;
	}
	
	//if ($scope.meat.temp)
}])

   
.controller('editTimerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('addDeviceCtrl', ['$scope', '$stateParams', 'devicesService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, devicesService) {
	$scope.sensors = tempSensors;
	$scope.device = {};

	var device = {'id':'4444',
	   'type': 'temperature',
	   'name': 'noname',
	   'currentTemp': 10,
	   'targetTemp': 10};

	$scope.save = function(){
		device.type = $scope.device.type;
		device.name = $scope.device.name;

		devicesService.devices.push(device);
	}
}])
   
.controller('editDeviceCtrl', ['$scope', '$stateParams', 'deviceService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, deviceService) {
	$scope.sensors = tempSensors;
	$scope.device = {};
	$scope.device.type = deviceService.selectedDevice.type;
	$scope.device.name = deviceService.selectedDevice.name;

}])
   
.controller('deleteDeviceCtrl', ['$scope', '$stateParams', 'devicesService', 'deviceService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, devicesService, deviceService) {

	$scope.delete = function(){
		var index = devicesService.devices.indexOf(deviceService.selectedDevice);

		devicesService.devices.splice(index, 1);
	}
}])
 