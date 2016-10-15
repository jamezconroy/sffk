'use strict';

(function() {
    var jamesFactory = function($http) {

        var factory = {};

        factory.getCustomers = function() {

            return $http.get("http://localhost:8081/customers")


            //return $http.get('/customers');
            //return [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];


        };

        factory.getCustomer = function(customerId) {
          //return {joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956};

          return $http.get('/customers/' + customerId);
        };

        return factory;
    };

    jamesFactory.$inject = ['$http'];

    angular.module('SffkApp').factory('jamesFactory', jamesFactory);

}());
