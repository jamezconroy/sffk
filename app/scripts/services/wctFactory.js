'use strict';

(function () {
  var projectFactory = function ($http, appSettings) {

    var factory = {};

    factory.getProjectList = function () {

      return $http.get(appSettings.apiUrl + "/projects")
    };

    factory.getProject = function (projectId) {
      return $http.get(appSettings.apiUrl + "/projects" + projectId);
    };

    return factory;
  };

  var consultantFactory = function ($http, appSettings) {

    var factory = {};

    factory.getTimesheetList = function () {
      return $http.get(appSettings.apiUrl + "/consultant-timesheets")
    };

    factory.getTimesheet = function (timesheetId) {
      return $http.get(appSettings.apiUrl + "/consultant-timesheets" + timesheetId);
    };

    return factory;
  };

  var clientFactory = function ($http, appSettings) {

    var factory = {};

    factory.getTimesheetList = function () {
      return $http.get(appSettings.apiUrl + "/client-timesheets")
    };

    factory.getTimesheet = function (projectId) {
      return $http.get(appSettings.apiUrl + "/client-timesheets" + timesheetId);
    };

    return factory;
  };

  var echosignFactory = function ($http, appSettings) {

    var factory = {};

    factory.getAgreementList = function () {
      return $http.get(appSettings.apiUrl + "/echosign-agreements")
    };

    factory.getAgreement = function (agreementId) {
      return $http.get(appSettings.apiUrl + "/echosign-agreements" + agreementId);
    };

    return factory;
  };

  projectFactory.$inject = ['$http', 'appSettings'];
  consultantFactory.$inject = ['$http', 'appSettings'];
  clientFactory.$inject = ['$http', 'appSettings'];
  echosignFactory.$inject = ['$http', 'appSettings'];

  angular.module('SffkApp').factory('projectFactory', projectFactory);
  angular.module('SffkApp').factory('consultantFactory', consultantFactory);
  angular.module('SffkApp').factory('clientFactory', clientFactory);
  angular.module('SffkApp').factory('echosignFactory', echosignFactory);


}());
