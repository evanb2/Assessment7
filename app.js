var rollCall = angular.module('rollCall', ['ui.router']);

rollCall.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "StudentsCtrl"
  });

});
