var app = angular.module('app', ['ngRoute',
'movieControllers',
'moviesFactory']);

app.config((function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'js/partials/movie-list.html',
    controller: 'MovieListCtrl'
  }).
  when('/:movieName', {
    templateUrl: 'js/partials/movie-detail.html',
    controller: 'MovieDetailCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}));

app.filter('encodeURI', function() {
  return window.encodeURI;
});
