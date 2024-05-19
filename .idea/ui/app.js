// app.js
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/auth', {
      templateUrl: 'login.htm',
      controller: 'UserController'
    })
    .when('/home', {
      templateUrl: 'home.htm',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});


