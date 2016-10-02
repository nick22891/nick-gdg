/**
 * Created by Nick on 15/09/16.
 */

angular.module('nick-gdg')
    .controller("HomeCtrl", ['$scope', '$location', '$routeParams', 'GoalsFactory',
        function($scope, $location, $routeParams, GoalsFactory) {

            GoalsFactory.query($routeParams, function(goals) {
                $scope.goals = goals;
            }, function(error) {
                console.log(error);
            });

        }
    ]
).controller("GoalEditCtrl", ['$scope', '$location', '$routeParams', 'GoalsFactory', 'GoalFactory',
        function($scope, $location, $routeParams, GoalsFactory, GoalFactory) {

            $scope.selectedGoal = "";

            GoalsFactory.query($routeParams, function(goals) {
                $scope.goals = goals;
                $scope.selectedGoal = $scope.goals[0]._id;
                $scope.getGoal($scope.goals[0]._id);
            }, function(error) {
                console.log(error);
            });

            $scope.getGoal = function () {
                $routeParams.id = $scope.selectedGoal;
                GoalFactory.show($routeParams, function(goal) {
                    $scope.goal = goal;
                }, function(error) {
                    console.log(error);
                });
            }

            $scope.updateGoal = function () {
                $routeParams.id = $scope.selectedGoal;
                GoalFactory.update($routeParams, $scope.goal, function(goal) {
                    console.log("Success!");
                }, function(error) {
                    console.log(error);
                });
            }

        }
]);
