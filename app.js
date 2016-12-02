var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log("Executando " + app.get('name') + " - " + app.get('version') + " na porta " + app.get('port'));
});