//Interaction with db
db = require('./db_proxy')
search = require('./../lib/search')


//global data just for testing
var data = { "entries": [
	{"title":"Title1", "text": "Text1 Text1 Text1."},
	{"title":"Title2", "text": "Text2 Text2 Tex2t."} 
]}


exports.index = function(req, res) {
	return "Welcome, this is the index!";
}

exports.showData = function (req, res) {
	var entries = [];
	data.entries.forEach(
		function(entry, i) {
			entries.push({
				id: i,
				title: entry.title,
				text: entry.text
			});
		});

	res.json({
		entries: entries
	});
};


exports.getEntries = function(req, res) {
	var entries = [];
	//fecch data from DB (using db_proxy)
}


exports.addEntry = function(req, res) {
	var newEntry = req.params.entry;
	//add data to DB (using db_proxy)
}

exports.search = function(req, res) {
	//use search lib
	//check if book already exists (by ASIN/name ?)
}