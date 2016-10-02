/**
 * Created by Nick on 02/10/16.
 */

var Goal = require('../../models/db').Goal;


var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * This function returns all of our sustainable development goals
 * @param req
 * @param res
 * @param next
 */
exports.getGoals = function(req, res, next) {
    Goal.find().exec(function(err, docs) {
        if(err) {
            next(err);
        } else {
            res.send(docs);
        }
    })
};

/*
This function gets a specific goal
 */

exports.getGoal = function(req, res, next) {
    Goal.findById(req.params.id)
        .exec(function(err, goal) {
            if(err) {
                next(err);
            } else {
                res.send(goal);
            }
        });
};

exports.createGoal = function(req, res, next) {
    var goal = new Goal(req.body);

    cloudinary.uploader.upload(req.body.image_url, function(result) {
        console.log(result);
        goal.image_url = result.url;
        goal.save(function(err) {
            if(err) {
                next(err);
            } else {
                res.send("Goal Created");
            }
        });
    });
};

exports.updateGoal = function(req, res, next) {
    Goal.findOne({ _id: req.params.id }, function (err, goal){
        goal.name = req.body.name;
        goal.extended_description = req.body.extended_description;
        goal.description = req.body.description;
        goal.color_hex = req.body.color_hex;

        if (goal.image_url !== req.body.image_url) {//update the image if we need to
            cloudinary.uploader.upload(req.body.image_url, function(result) {
                console.log(result);
                goal.image_url = result.url;
                goal.save(function(err) {
                    if(err) {
                        next(err);
                    } else {
                        res.send("Goal Updated");
                    }
                });
            });
        }
        else {//or just save the goal if the image url hasn't changed
            goal.save(function(err) {
                if(err) {
                    next(err);
                } else {
                    res.send("Goal Updated");
                }
            });
        }
    });
};

