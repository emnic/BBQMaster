



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
   
.controller('dashboardDevicesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
   
.controller('addDeviceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editDeviceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('deleteDeviceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 