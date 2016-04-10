'use strict';
(function() {
  function config ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
angular
  .module('iplayerApp', ['ngRoute'])
  .config(config);
})();
