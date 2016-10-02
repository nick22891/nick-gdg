/**
 * Created by Nick on 15/09/16.
 */

angular.module('nick-gdg')
    .controller("HomeCtrl", ['$scope', '$location', '$routeParams', 'GoalsFactory',
        function($scope, $location, $routeParams, GoalsFactory) {

            GoalsFactory.query($routeParams, function(tests) {
                $scope.tests = tests;
            }, function(error) {
                console.log(error);
            });

        }
    ]
);

