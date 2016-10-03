/**
 * Created by Nick on 02/10/16.
 */

var express = require('express'),
    User = require('./user'),
    passport = require('passport'),
    router = express.Router(),
    logout = require('express-passport-logout');

router.post('/user', User.createUser);
router.get('/user', User.getCurrentUser);

router.post('/login',
    passport.authenticate('local'),
    User.authenticate);

module.exports = router;