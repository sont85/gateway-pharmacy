var app = angular.module('app',['ui.router']);

app.controller('MainCtrl', function(){
  console.log('GOOD WORK')
});


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'public/html/home.html'
    });
});
