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

/**
 * Intended to be used for the Application Manager.  Tokens are not given to the users
 * but are instead assigned to an application that is created by the user.
 */
var TestSchema = new Schema({
    name: {type: String, required: true, unique: false},
    description: {type: String}
});

exports.Test = mongoose.model('Test', TestSchema);
