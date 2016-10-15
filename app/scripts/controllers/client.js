'use strict';

/**
 * @ngdoc function
 * @name SffkApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the SffkApp
 */

(function () {

  var ClientCtrl = function ($scope, $log, clientFactory, appSettings) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {

      clientFactory.getTimesheetList()
        .success(function (clientTimesheets) {
          $scope.clientTimesheets = clientTimesheets;
        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }

    init();


    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  ClientCtrl.$inject = ['$scope', '$log', 'clientFactory', 'appSettings'];
  angular.module('SffkApp').controller('ClientCtrl', ClientCtrl);

}());
