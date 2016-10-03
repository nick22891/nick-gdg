/**
 * Created by Nick Williams on 01/10/16.
 */

/**
 * As a guiding principle - each table must have a state... this allows us to deactivate (but not delete!)
 * Created by matjames007 on 9/10/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.MONGOLAB_URI);

var TestSchema = new Schema({
    name: {type: String, required: true, unique: false},
    description: {type: String}
});

var GoalSchema = new Schema({
    name: {type: String, required: true, unique: false},
    description: {type: String},
    extended_description: {type: String},
    image_url: {type: String},
    color_hex: {type: String}
});

var ProjectSchema = new Schema({
    name: {type: String, required: true, unique: false},
    description: {type: String},
    image_url: {type: String},
    creator: { type : Schema.Types.ObjectId, ref: 'User'},
    members: [{ type : Schema.Types.ObjectId, ref: 'User' }],
    goals: [{ type : Schema.Types.ObjectId, ref: 'Goal' }]
});

var UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    first_name: {type: String, required: true, unique: false},
    last_name: {type: String, required: true, unique: false},
    email_address: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    image_url: {type: String}
});

exports.Test = mongoose.model('Test', TestSchema);

exports.Goal = mongoose.model('Goal', GoalSchema);

exports.Project = mongoose.model('Project', ProjectSchema);

exports.User = mongoose.model('User', UserSchema);
