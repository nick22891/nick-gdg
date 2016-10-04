/**
 * Created by nick22891 on 3/10/16.
 */

angular.module('nick-gdg', ["ngRoute", "nick-gdg.services", "isteven-multi-select","mgcrea.ngStrap"])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {templateUrl: '../partials/homepage.html', controller: 'HomeCtrl'});
        $routeProvider.when('/goals/edit', {templateUrl: '../partials/editgoals.html', controller: 'GoalEditCtrl'});
        $routeProvider.when('/logout', {templateUrl: '../partials/homepage.html', controller: 'HomeCtrl'});
        $routeProvider.when('/projects', {templateUrl: '../partials/projectslisting.html', controller: 'ProjectsCtrl'});
        $routeProvider.when('/goal/:id/projects', {templateUrl: '../partials/projectslisting.html', controller: 'ProjectsCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});

        //$locationProvider.html5Mode(true);
    }]);
