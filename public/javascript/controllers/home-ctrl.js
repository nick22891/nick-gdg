/**
 * Created by Nick on 15/09/16.
 */

angular.module('nick-gdg')
    .controller("HomeCtrl", ['$scope', '$location', '$routeParams',
        function($scope, $location, $routeParams) {

            $scope.message = "Hello World!!!";

        }
    ]
);

