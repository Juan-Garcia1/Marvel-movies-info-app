angular.module('moviesFactory', []).
factory('movies', function($http) {

  function getData(callback) {
    $http({
      method: 'GET',
      url: 'movies.json',
      cache: true
    }).success(callback);
  }

  return {
    list: getData,
    find: function(title, callback) {
      getData(function (data) {
        var movie = data.filter(function (entry) {
          return entry.title === title;
        })[0];
        callback(movie);
      });
    }
  };
});
