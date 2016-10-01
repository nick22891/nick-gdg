/**
 * Created by Nick Williams on 01/10/16.
 */

var services = angular.module('nick-gdg.services', ['ngResource']);

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
 * Factory used to get the Platform defaults
 */
services.factory('PlatformFactory', function($resource) {
    return $resource('/platform', {}, {
        show: {method: 'GET'}
    });
});


/**
 * View all User Roles
 */
services.factory('RolesFactory', function($resource) {
    return $resource('/roles', {}, {
        query: { method: 'GET', isArray: true}
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


/**
 * Get all applications for user
 */
services.factory('AppsFactory', function($resource) {
    return $resource('/apps', {}, {
        query: { method: 'GET', isArray: true}
    });
});

/**
 * Create an application
 */
services.factory('AppFactory', function($resource) {
    return $resource('/app', {}, {
        create: { method: 'POST'}
    });
});

/**
 * Activates a user account via the token
 */
services.factory('UserActivationFactory', function($resource) {
    return $resource('/activate/:token', {}, {
        activate: {method: 'GET',params: {token: '@token'}}
    });
});