/**
 * Created by Nick Williams on 01/10/16.
 */

var services = angular.module('nick-gdg.services', ['ngResource']);

/**
 * Get all tests
 */
services.factory('TestsFactory', function($resource) {
    return $resource('/tests', {}, {
        query: { method: 'GET', isArray: true}
    });
});

/**
 * Create a test
 */
services.factory('TestFactory', function($resource) {
    return $resource('/test', {}, {
        create: { method: 'POST'}
    });
});

/**
 * Get all the SD Goals
 */
services.factory('GoalsFactory', function($resource) {
    return $resource('/goals', {}, {
        query: { method: 'GET', isArray: true}
    });
});

/**
 * Create a goal, show a specific goal by its ID, or update a specific goal by its ID.
 */
services.factory('GoalFactory', function($resource) {
    return $resource('/goal/:id', {}, {
        create: { method: 'POST'},
        show: { method: 'GET', params: {id: '@id'} },
        update: { method: 'PUT', params: {id: '@id'} }
    });
});

/**
 * Gets current logged in user
 */
services.factory('CurrentUserFactory', function($resource) {
    return $resource('/user', {}, {
        query: { method: 'GET'}
    });
});

/**
 * Login Endpoint
 */
services.factory('AuthenticationFactory', function($resource) {
    return $resource('/login', {}, {
        login: { method: 'POST'}
    });
});

//creates a user

/**
 * Factory used in creating and accessing User details
 */
services.factory('UserFactory', function($resource) {
    return $resource('/user/:id', {}, {
        create: { method: 'POST'},
        show: {method: 'GET',params: {id: '@id'}}
    });
});

/**
 * Logout Endpoint
 */
services.factory('LogoutFactory', function($resource) {
    return $resource('/logout', {}, {
        logout: { method: 'GET'}
    });
});

/**
 * Create a goal, show a specific goal by its ID, or update a specific goal by its ID.
 */
services.factory('ProjectFactory', function($resource) {
    return $resource('/project/:id', {}, {
        create: { method: 'POST'},
        show: { method: 'GET', params: {id: '@id'} },
        update: { method: 'PUT', params: {id: '@id'} }
    });
});
