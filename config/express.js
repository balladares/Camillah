// Load expres and modules
var express = require('express'),
    expressLoad = require('express-load'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function() {
    var app = express();

    // App info variables
    app.set('port', 3000);
    app.set('version', 1);
    app.set('name', 'Camilla');

    // Static content
    app.use(express.static('./public'));
    app.use('/vendor', express.static('public'));
    app.use('/js', express.static('public'));
    app.use('/partials', express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());

    // Config express-load
    expressLoad('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}