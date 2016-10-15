'use strict';

/**
 * @ngdoc function
 * @name SffkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SffkApp
 */
angular.module('SffkApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.getClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
  });
