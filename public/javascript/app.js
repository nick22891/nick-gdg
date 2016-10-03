/**
 * Created by matjames007 on 9/10/16.
 */

angular.module('nick-gdg', ["ngRoute", "nick-gdg.services"]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: '../partials/homepage.html', controller: 'HomeCtrl'});
    $routeProvider.when('/goals/edit', {templateUrl: '../partials/editgoals.html', controller: 'GoalEditCtrl'});
    $routeProvider.when('/login', {templateUrl: '../partials/login.html', controller: 'UserLoginCtrl'});
    $routeProvider.when('/signup', {templateUrl: '../partials/signup.html', controller: 'UserSignupCtrl'});
    $routeProvider.when('/logout', {templateUrl: '../partials/homepage.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});

    //$locationProvider.html5Mode(true);
}]);
