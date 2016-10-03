/**
 * Created by Nick on 02/10/16.
 */

var Project = require('../../models/db').Project;

var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


exports.createProject = function(req, res, next) {

    console.log(req.user);
    var project = new Project(req.body);
    project.creator = req.user._id;//set the project creator to the currently logged in user
    console.log(project);

    if (req.body.image_url !== "") cloudinary.uploader.upload(req.body.image_url, function(result) {
        console.log(result);
        project.image_url = result.url;
        project.save(function(err) {
            if(err) {
                console.log("Error Saving Project");
            } else {
                res.send("Project Created");
            }
        });
    });
    else project.save(function(err, proj) {
        if(err) {
            console.log("Error Saving Project");
        } else {
            res.send(proj);
        }
    });
};

/**
 * This function returns all of our projects
 * @param req
 * @param res
 * @param next
 */
exports.getProjects = function(req, res, next) {
    Project.find().exec(function(err, docs) {
        if(err) {
            next(err);
        } else {
            res.send(docs);
        }
    })
};


/*
 This function gets a specific project
 */

exports.getProject = function(req, res, next) {
    Project.findById(req.params.id)
        .exec(function(err, project) {
            if(err) {
                next(err);
            } else {
                res.send(project);
            }
        });
};
