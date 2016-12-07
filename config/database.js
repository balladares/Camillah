// Get mongoose module
var mongoose = require('mongoose');

module.exports = function(uri) {
    // Connect to mongo
    mongoose.connect(uri);

    // Verify if mongo is connected
    mongoose.connection.on('connected', function() {
        console.log('Mongo is connected ;) ~ ' + uri);
    });

    // Verify if mongo was disconnected
    mongoose.connection.on('disconnected', function() {
        console.log('Mongo was disconnected :s ~ ' + uri);
    });

    // Verify if mongo connection returned some error
    mongoose.connection.on('error', function(err) {
        console.log('When tried to connect with MongoDB an error was ocurred :c ~ ' + err);
    });

    // Close connection when app will close
    process.on('SIGINIT', function() {
        mongoose.connection.close(function() {
            console.log('MongoDB was disconnected because app was closed');

            process.exit(0);
        });
    });
}