'use strict';

angular.module('monApp',['ui.router','ngResource','monApp.controllers','monApp.services']);

angular.module('monApp').config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'partials/home.html'
    }).state('users',{
       url:'/users',
       templateUrl:'partials/users.html',
       controller:'MainCtrl'
    }).state('viewuser',{
        url:'/users/:id/view',
        templateUrl:'partials/user-view.html',
        controller:'UserViewCtrl'
     }).state('adduser',{
        url:'/users/new',
        templateUrl:'partials/add-user.html',
        controller:'UserCreateCtrl'
    }).state('edituser',{
        url:'/users/:id/edit',
        templateUrl:'partials/edit-user.html',
        controller:'UserEditCtrl'
    });
});