/**
 * Created by Nick Williams on 01/10/16.
 */

var services = angular.module('nick-gdg.services', ['ngResource']);

/**
 * Get all applications for user
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
