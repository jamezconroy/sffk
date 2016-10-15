'use strict';

/**
 * @ngdoc function
 * @name SffkApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the SffkApp
 */

(function () {

  var ProjectCtrl = function ($scope, $log, projectFactory, appSettings) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {

      projectFactory.getProjectList()
        .success(function (projects) {
          $scope.projects = projects;
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

  ProjectCtrl.$inject = ['$scope', '$log', 'projectFactory', 'appSettings'];
  angular.module('SffkApp').controller('ProjectCtrl', ProjectCtrl);

  //});

}());
