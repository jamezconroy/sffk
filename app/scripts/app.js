'use strict';

/**
 * @ngdoc overview
 * @name SffkApp
 * @description
 * # SffkApp
 *
 * Main module of the application.
 */
angular
  .module('SffkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/james', {
        templateUrl: 'views/james.html',
        controller: 'JamesCtrl'
      })
      .when('/project', {
        templateUrl: '../views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/consultant', {
        templateUrl: '../views/consultant.html',
        controller: 'ConsultantCtrl'
      })
      .when('/client', {
        templateUrl: '../views/client.html',
        controller: 'ClientCtrl'
      })
      .when('/echosign', {
        templateUrl: 'views/echosign.html',
        controller: 'EchosignCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
