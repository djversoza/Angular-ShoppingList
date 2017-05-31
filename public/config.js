(function(){
  'use strict';
  const app = angular.module('list', ['ui.router']);

  app.config(config)
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state({
      name: 'home',
      url: '/',
      component:'main'
    })
    .state({
      name: 'addList',
      url: '/NewList',
      component: 'addList'
    })
  }
}())
