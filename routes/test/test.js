/**
 * Created by Nick on 01/10/16.
 */

var Test = require('../../models/db').Test;

/**
 * This function returns all of our test models
 * @param req
 * @param res
 * @param next
 */
exports.getTests = function(req, res, next) {
    Test.find().exec(function(err, docs) {
        if(err) {
            next(err);
        } else {
            res.send(docs);
        }
    })
};

exports.createTest = function(req, res, next) {
    var test = new Test(req.body);

    test.save(function(err) {
        if(err) {
            next(err);
        } else {
            res.send("Test Created");
        }
    });
};

