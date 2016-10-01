/**
 * Created by Nick on 15/09/16.
 */

angular.module('nick-gdg')
    .controller("HomeCtrl", ['$scope', '$location', '$routeParams', 'TestFactory', 'TestsFactory',
        function($scope, $location, $routeParams, TestFactory, TestsFactory) {

            TestsFactory.query($routeParams, function(tests) {
                $scope.tests = tests;
            }, function(error) {
                console.log(error);
            });

        }
    ]
);

