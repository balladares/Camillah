module.exports = function(app){
	var controller = app.controllers.loves;

	// Return all loves
	app.get('/api/loves', controller.Loves);

	// Return love with especific short
	app.get('/api/loves/:short', controller.LovesByShort);

	// Return random love
	app.get('/api/random/loves', controller.RandomLoves);

	app.get('/api/teste', controller.dale);
}