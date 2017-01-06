module.exports = function(app) {
    var controller = app.controllers.loves;

    // Return all loves or specific love by id
    app.get('/api/get/loves', controller.GetAllLoves);

    // Return alove with specific id
    app.get('/api/get/love/:id', controller.LoveById);

    // Return love with especific short
    app.get('/api/get/loves/:short', controller.LovesByShort);

    // Return random love
    app.get('/api/get/random/loves', controller.RandomLove);

    // Add love
    app.post('/api/add/love', controller.AddLove);

};