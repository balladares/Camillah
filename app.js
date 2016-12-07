// Load http module and express configs
var http = require('http');
var app = require('./config/express')();

// Mongo connect
require('./config/database.js')('mongodb://localhost:27017/camillah');

// Create server
http.createServer(app).listen(app.get('port'), function() {
    console.log("Executando " + app.get('name') + " - " + app.get('version') + " na porta " + app.get('port'));
});