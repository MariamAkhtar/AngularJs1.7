'use strict';

angular.
  module('githubSearchApp').
  config(['$routeProvider', '$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.
      when('/home', {
        template: '<home-page></home-page>'
      }).
        when('/repositories/:username/', {
          template: '<repo-list></repo-list>'
        }).
        when('/repositories/:username/:reponame/readme', {
          template: '<repo-detail></repo-detail>'
        }).
        otherwise('/home');
        $locationProvider.html5Mode(true);
            
    }
  ]);
