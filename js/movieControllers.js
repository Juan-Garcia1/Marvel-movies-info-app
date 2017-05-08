var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('MovieListCtrl', function($scope, movies) {
  movies.list(function(movies) {
    $scope.movies = movies;
  });
});

movieControllers.controller('MovieDetailCtrl', function($scope, $routeParams, movies) {
  movies.find($routeParams.movieName, function (movie) {
    $scope.movie = movie;
  });
});
