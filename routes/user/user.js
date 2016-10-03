/**
 * Created by Nick on 02/10/16.
 */


var model = require('../../models/db'),
    User = model.User;

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

/**
 * Setup the local strategy required for login and establish checks
 * for credentials provided during login.
 */
passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log(username, password);
        User.findOne({ username: username }, 'username ' +
            'first_name last_name email_address image_url password',
            function (err, user) {
                console.log(err, user);
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Incorrect credentials.'});
                }
                if (user.password != password) {
                    return done(null, false, {message: 'Incorrect credentials.'});
                }
                return done(null, user, {message: 'Logged in!'});
            }
        );
    }
));

exports.authenticate = function(req, res, next) {
    res.send(req.user);
};

/**
 * Removing confidential items from the user before transmission
 * over the wire.
 */
passport.serializeUser(function(user, done) {
    user.password = undefined;
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

exports.createUser = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if(err) {
            next(err);
        } else {
            console.log(err);
        }
    });
};

/**
 * Get the current logged in user
 * @param req
 * @param res
 * @param next
 */
exports.getCurrentUser = function(req, res, next) {
    res.send(req.user);
};
