// Data set
var words = [{
        country: 'Brazil',
        short: 'pt-br',
        word: 'Te amo Camilla!'
    },
    {
        country: 'United States',
        short: 'en',
        word: 'I love you Camilla!'
    },
    {
        country: 'Italy',
        short: 'it',
        word: 'Amo Camilla!'
    },
    {
        country: 'Polonês',
        short: 'pl',
        word: 'Kocham Camilla!'
    },
    {
        country: 'Teste',
        short: 'pl',
        word: 'Kocham Camilla!'
    },
    {
        country: 'Romenia',
        short: 'ro',
        word: 'Îmi place Camilla!'
    },
    {
        country: 'Somali',
        short: 'so',
        word: 'Waan jeclahay Camilla!'
    }
];

var mongoose = require('mongoose');

module.exports = function(app) {
    // Create controller object
    var controller = {};
    // Get Loves model 
    var Loves = app.models.loves;

    // Return especific love by id value
    controller.LoveById = function(req, res) {
        var id = mongoose.mongo.ObjectId(req.params.id);

        Loves.find({_id:id} , function(err, dale){
			res.json(dale);
		});
    };

    // Return especific word by short value
    controller.LovesByShort = function(req, res) {
        var short = req.params.short;
		
        Loves.find({short: short}).exec()
            .then(function(love) {
                if (!love) {
                    res.json({ CamillahApp: { HasError: true, Error: 'Nothing loves find with this short: ' + short } })
                } else {
                    res.json({ CamillahApp: { HasError: false, Love: love } });
					console.log(love);
                }
            }, function(err) {
                res.json({ CamillahApp: { HasError: true, Error: err } });
            });
    };

    // Return ramdom love
    controller.RandomLove = function(req, res) {
        Loves.find().exec()
            .then(function(loves) {
                var love = loves[Math.floor(Math.random() * loves.length)];

                res.json({ CamillahApp: { HasError: false, Love: love } });
            }, function(err) {
                res.json({ CamillahApp: { HasError: true, Error: err } });
            });

    };

    // Rerturn all loves
    controller.GetAllLoves = function(req, res) {
        var id = req.params.id;

        Loves.find().exec()
            .then(function(loves) {
                res.json({ CamillahApp: { HasError: false, Loves: loves } });
            }, function(err) {
                res.json({ CamillahApp: { HasError: true, Error: err } });
            });
    };

    // Add loves
    controller.AddLove = function(req, res) {
        Loves.create(req.body.loves)
            .then(function(success) {
                res.status(201).json({ CamillahApp: { HasError: false, Success: success } });
            }, function(err) {
                res.status(500).json({ CamillahApp: { HasError: true, Error: err } });
            });
    };

    return controller;
};