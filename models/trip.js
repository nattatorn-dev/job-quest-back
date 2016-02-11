var mongoose = require('mongoose'),
    validators = require('mongoose-validators');


var tripSchema = mongoose.Schema({
    name             : String,
    price            : {type: Number, validate: validators.isNumeric()},
    description      : String
});

module.exports = mongoose.model('Trip', tripSchema);
