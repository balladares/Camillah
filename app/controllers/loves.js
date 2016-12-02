// Data set
var words = [
			{
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

module.exports = function(){
	var controller = {};

	// Return all words
	controller.Loves = function(req, res){
		res.json(words);	
	}

	// Return especific word by short value
	controller.LovesByShort = function(req, res){
		var short = req.params.short;
		var word = words.filter(function(word){
			return word.short == short;
		})[0];

		word?
			res.json(word):
			res.status(404).send('No words with this short param.');
	}

	// Return ramdom word
	controller.RandomLoves = function(req,res){
		res.json(words[Math.floor(Math.random() * words.length)]);
	}

	return controller;
}