angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
 
  $routeProvider
    .when('/', {
      controller:'MainCtrl',
      templateUrl:'views/list.html',
      resolve: { isOffset: function() { return false } }
    })
    .when('/edit/:taskName', {
      controller:'EditTaskCtrl',
      templateUrl:'views/edittask.html',
      resolve: { isOffset: function() { return false } }
    })
    /*.when('/new', {
      controller:'NewProjectController as editProject',
      templateUrl:'detail.html',
      resolve: resolveProjects
    })*/
    .otherwise({
      redirectTo:'/'
    });
})