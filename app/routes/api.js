//Interaction with db
db = require('./db_proxy')
search = require('./../lib/search')


exports.getEntries = function(req, res) {
	var entries = [];
	//fecch data from DB (using db_proxy)
}


exports.addEntry = function(req. res) {
	var newEntry = req.params.entry;
	//add data to DB (using db_proxy)
}

exports.search = function(req, res) {
	//use search lib
	//check if book already exists (by ASIN/name ?)
}