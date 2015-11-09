var app = angular.module('app',['ui.router']);

app.controller('ContactCtrl', function($location){
  function initMap() {

    var myLatLng = {lat: 38.2642, lng: -122.052021}
    var map = new google.maps.Map(document.getElementById('mapping'), {
      center: myLatLng,
      zoom: 13,
      scrollwheel: false
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      title: 'Gateway Pharmacy',
      map: map
    });
  }
  initMap();
});
app.controller('MainCtrl', function(){
});

app.controller('NavCtrl', function($scope, $location){
  $scope.activePath = function(){
    return $location.path();
  }
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'public/html/home.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl:'public/html/about.html',
      controller: 'MainCtrl'
    })
    .state('services', {
      url: '/services',
      templateUrl:'public/html/services.html',
      controller: 'MainCtrl'
    })
    .state('compounding', {
      url: '/compounding',
      templateUrl:'public/html/compounding.html',
      controller: 'MainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl:'public/html/contact.html',
      controller: 'ContactCtrl'
    })
});
