/**
 * Created by Nick on 15/09/16.
 */

angular.module('nick-gdg')
    .controller("HomeCtrl", ['$scope', '$route', '$location', '$routeParams', 'GoalsFactory', 'LogoutFactory',
        function($scope, $route, $location, $routeParams, GoalsFactory, LogoutFactory) {

            GoalsFactory.query($routeParams, function(goals) {
                $scope.goals = goals;
            }, function(error) {
                console.log(error);
            });

            $scope.viewProjectsForGoal = function (goal_id) {
                $location.path('goal/' + goal_id + "/projects");
            }

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
]).controller("NavigationCtrl", ['$scope', '$location', '$routeParams', 'CurrentUserFactory',
        function($scope, $location, $routeParams, CurrentUserFactory) {

            $scope.userLoggedIn = false;

            CurrentUserFactory.query($routeParams, function(user) {
                $scope.user = user;
                if ($scope.user._id !== undefined) $scope.userLoggedIn = true;
                console.log(user);
            }, function(error) {
                console.log(error);
            });

        }
]).controller("UserLoginCtrl", ['$scope', '$location', '$routeParams',
        'AuthenticationFactory',
        function($scope, $location, $routeParams, AuthenticationFactory) {

            $scope.credentials = {};

            $scope.login = function() {
                $scope.credentials.password = CryptoJS.SHA1($scope.credentials.password).toString(CryptoJS.enc.Hex);
                AuthenticationFactory.login($scope.credentials, function(response) {
                    $location.url('/');
                }, function(error) {
                    console.log("incorrect credentials!");
                });
            };
        }
    ]
).controller("UserSignupCtrl", ['$scope', '$location', '$routeParams', 'UserFactory',
        function($scope, $location, $routeParams, UserFactory) {

            $scope.user = {};
            $scope.passwordConfirm = "";

            $scope.createUser = function () {
                if (!$scope.signupForm.$invalid &&
                    $scope.validatePasswordMatch($scope.user.password, $scope.passwordConfirm)) {

                    $scope.user.password = CryptoJS.SHA1($scope.user.password).toString(CryptoJS.enc.Hex);

                    UserFactory.create($scope.user, function(user) {
                        $location.url('/#/login');
                    }, function(error) {
                        console.log(error);
                    });
                }
            };

            /**
             * Password check fields
             */
            $scope.validatePasswordMatch = function (pass1, pass2) {
                return (pass1 == pass2);
            };

        }
    ]
).controller("NewProjectCtrl", ['$scope', '$location', '$routeParams', 'UserFactory', 'GoalsFactory', 'ProjectFactory',
        function($scope, $location, $routeParams, UserFactory, GoalsFactory, ProjectFactory) {

            GoalsFactory.query($routeParams, function(goals) {
                $scope.inputList = goals;
                $scope.inputList.forEach(function (item, index) {
                    $scope.inputList[index].image = "<img src='" + $scope.inputList[index].image_url + "'/>";
                });
            }, function(error) {
                console.log(error);
            });

            $scope.outputModel = [];//this will store the array of goals selected using the multi-select
            $scope.project = {};
            $scope.project.image_url = "";
            $scope.project.goals = [];

            $scope.createProject = function () {
                $scope.outputModel.forEach(function (item, index) {
                    $scope.project.goals.push(item._id);
                });
                ProjectFactory.create($scope.project, function(project) {
                    $location.url('project/' + project._id);
                }, function(error) {
                    console.log(error);
                });
                console.log($scope.outputModel);
            }
        }
    ]
).controller("ProjectsCtrl", ['$scope', '$route', '$location', '$routeParams', 'GoalProjectsFactory', 'ProjectsFactory',
        function($scope, $route, $location, $routeParams, GoalProjectsFactory, ProjectsFactory) {

            //this is for if we're getting projects for a specific goal
            if ($routeParams.id !== undefined) GoalProjectsFactory.show({id:$routeParams.id}, function(projects) {
                $scope.projects = projects;
            }, function(error) {
                console.log(error);
            });
            //this is for if we're just getting all the projects
            else ProjectsFactory.query($routeParams, function(projects) {
                $scope.projects = projects;
            }, function(error) {
                console.log(error);
            });

        }
    ]
);
