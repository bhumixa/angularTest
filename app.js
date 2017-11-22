angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
 
  $routeProvider
    .when('/', {
      controller:'MainCtrl',
      templateUrl:'views/list.html',
    })/*
    .when('/edit/:projectId', {
      controller:'EditProjectController as editProject',
      templateUrl:'detail.html',
      resolve: resolveProjects
    })
    .when('/new', {
      controller:'NewProjectController as editProject',
      templateUrl:'detail.html',
      resolve: resolveProjects
    })*/
    .otherwise({
      redirectTo:'/'
    });
})