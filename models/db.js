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
    image_url: {type: String}
});

exports.Test = mongoose.model('Test', TestSchema);

exports.Goal = mongoose.model('Goal', GoalSchema);
