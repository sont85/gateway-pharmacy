var app = angular.module('app',['ui.router']);

app.controller('ContactCtrl', function(){
  function initMap() {

    var myLatLng = {lat: 38.263302, lng: -122.052021}
    var map = new google.maps.Map(document.getElementById('mapping'), {
      center: myLatLng,
      zoom: 13,
      scrollwheel: false
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Gateway Pharmacy'
    });
  }
  initMap();
});
app.controller('MainCtrl', function(){
  console.log('mainctrl')
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
    .state('contact', {
      url: '/contact',
      templateUrl:'public/html/contact.html',
      controller: 'ContactCtrl'
    })
});
