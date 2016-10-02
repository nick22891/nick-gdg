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
