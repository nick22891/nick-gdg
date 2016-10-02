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

