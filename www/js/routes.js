angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dashboard', {
    url: '/temp',
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.dashboardDevices', {
    url: '/dashboarddevices',
    views: {
      'tab3': {
        templateUrl: 'templates/dashboardDevices.html',
        controller: 'dashboardDevicesCtrl'
      }
    }
  })

  .state('tabsController.graphs', {
    url: '/graphs',
    views: {
      'tab2': {
        templateUrl: 'templates/graphs.html',
        controller: 'graphsCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.editTemperature', {
    url: '/edittemperature',
    views: {
      'tab1': {
        templateUrl: 'templates/editTemperature.html',
        controller: 'editTemperatureCtrl'
      }
    }
  })

  .state('tabsController.editTimer', {
    url: '/edittimer',
    views: {
      'tab1': {
        templateUrl: 'templates/editTimer.html',
        controller: 'editTimerCtrl'
      }
    }
  })

  .state('tabsController.addDevice', {
    url: '/adddevice',
    views: {
      'tab3': {
        templateUrl: 'templates/addDevice.html',
        controller: 'addDeviceCtrl'
      }
    }
  })

  .state('tabsController.editDevice', {
    url: '/editdevice',
    views: {
      'tab3': {
        templateUrl: 'templates/editDevice.html',
        controller: 'editDeviceCtrl'
      }
    }
  })

  .state('tabsController.deleteDevice', {
    url: '/deletedevice',
    views: {
      'tab3': {
        templateUrl: 'templates/deleteDevice.html',
        controller: 'deleteDeviceCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/temp')

  

});