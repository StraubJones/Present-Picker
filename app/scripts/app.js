'use strict';

/**
 * @ngdoc overview
 * @name presentPickerApp
 * @description
 * # presentPickerApp
 *
 * Main module of the application.
 */
angular
  .module('presentPickerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/picker', {
        templateUrl: 'views/picker.html',
        controller: 'PickerCtrl',
        controllerAs: 'picker'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
