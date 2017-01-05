var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        	country: {
                type: String
            },
			short: {
                type: String
            },
			word: {
                type: String
            }
    });

    return mongoose.model('Loves', schema);
}