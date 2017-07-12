// Code goes here

    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "index.htm",
          controller : 'mainController'
        })
        .when("/#!WikiQS", {
          templateUrl: "WikiQS.htm",
          controller : 'wikiController'
        });
    });
    
    app.controller('mainController', function($scope){
      $scope.message = 'Welcome home';
      
    });
    app.controller('wikiController', function($scope){
      $scope.message = 'it is working?';
      
    });
    
    