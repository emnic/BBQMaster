testDevice1 = {'id':'1234',
  			   'type': 'temperature',
			   'name':'Device1',
			   'currentTemp': 57,
			   'targetTemp':70};

testDevice2 = {'id':'4321',
			   'type': 'temperature',
			   'name':'Device2',
			   'currentTemp': 60,
			   'targetTemp':79};

testDevice3 = {'id':'4444',
			   'type': 'temperature',
			   'name':'Device3',
			   'currentTemp': 20,
			   'targetTemp':99};

testTimer1 = {'id': '6666',
			  'type': 'timer',
			  'name': 'TestTimer',
			  'elapsedTime': '20:35:15',
			  'timeLeft': '00:03:14'}

testDevices = [testDevice1, testDevice2, testDevice3, testTimer1];



Beef = [{'name': 'Beef', 'temp': 50}, {'name': 'Entrecote', 'temp': 35}];
Lamb = [{'name': 'Racks', 'temp': 66}];
Pork = [{'name': 'Porkshops', 'temp' :77}];

meatCategories = [{'categoryName': 'Beef', 'meatList': Beef}, 
				  {'categoryName': 'Lamb', 'meatList': Lamb},
				  {'categoryName': 'Pork', 'meatList': Pork}];


angular.module('app.controllers', [])
  
.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.devices = testDevices;

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
      
.controller('editTemperatureCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.slider = {};
	$scope.meat = {};
	$scope.cat = {};

	$scope.slider.value = 25;

	$scope.meatCategories = meatCategories;

	$scope.setTemp = function(temp){
		$scope.slider.value = temp;
	}

	$scope.clearMeatSelections = function(){
		$scope.cat.meatCat = 'nonsense';
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
 