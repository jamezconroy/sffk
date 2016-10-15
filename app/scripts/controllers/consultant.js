'use strict';

/**
 * @ngdoc function
 * @name SffkApp.controller:ConsultantCtrl
 * @description
 * # ConsultantCtrl
 * Controller of the SffkApp
 */

(function () {

  var ConsultantCtrl = function ($scope, $log, consultantFactory, appSettings) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {

      consultantFactory.getTimesheetList()
        .success(function (consultantTimesheets) {
          $scope.consultantTimesheets = consultantTimesheets;
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

  ConsultantCtrl.$inject = ['$scope', '$log', 'consultantFactory', 'appSettings'];
  angular.module('SffkApp').controller('ConsultantCtrl', ConsultantCtrl);

}());
