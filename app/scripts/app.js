'use strict';

angular.module('unbekanntApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngGrid'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/case', {
        templateUrl: 'views/case.html',
        controller: 'CaseCtrl'
      })
      .otherwise({
        redirectTo: '/case'
      });
  });
