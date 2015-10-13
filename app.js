'use strict';

// Declare app level module which depends on views, and components
angular.module('appRock', [
  'ngRoute',
  'appRock.view1',
  'appRock.view2',
  'appRock.version',
  'appRock.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/',{templateUrl: 'view2/Home.html'});
  $routeProvider.when('/foo',{templateUrl: 'view2/Construccion.html'});
  $routeProvider.when('/bar',{templateUrl: 'view2/Construccion.html'});
  $routeProvider.when('/the-rolling-stones',{templateUrl: 'view1/viewmain.html', controller: 'RollingController'});
  $routeProvider.when('/the-beatles',{templateUrl: 'view1/viewmain.html', controller: 'BeatlesController'});
  $routeProvider.when('/queen',{templateUrl: 'view1/viewmain.html' , controller: 'QueenController' });
  $routeProvider.otherwise({redirectTo: '/'});
  
}]);
