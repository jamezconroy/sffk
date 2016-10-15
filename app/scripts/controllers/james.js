'use strict';

/**
 * @ngdoc function
 * @name SffkApp.controller:JamesCtrl
 * @description
 * # JamesCtrl
 * Controller of the SffkApp
 */


//angular.module('SffkApp')
//.controller('JamesCtrl', function ($scope) { //}, $log, jamesFactory, appSettings) {


(function () {

  var JamesCtrl = function ($scope, $log, jamesFactory, appSettings) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {


      // Hard-coded version
      /*      $scope.customers = [{
       joined: '2000-12-02',
       name: 'John',
       city: 'Chandler',
       orderTotal: 9.9956
       }, {joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99}, {
       joined: '1944-06-15',
       name: 'Tina',
       city: 'New York',
       orderTotal: 44.99
       }, {joined: '1995-03-28', name: 'Dave', city: 'Seattle', orderTotal: 101.50}];*/


//      $scope.customers = jamesFactory.getCustomers();

      jamesFactory.getCustomers()
        .success(function (customers) {
          $scope.customers = customers;
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

  JamesCtrl.$inject = ['$scope', '$log', 'jamesFactory', 'appSettings'];
  angular.module('SffkApp').controller('JamesCtrl', JamesCtrl);

  //});

}());
