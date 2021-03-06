'use strict';

angular.module('helloAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:status', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
