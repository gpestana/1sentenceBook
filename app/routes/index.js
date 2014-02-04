
/*
 * Routing handlers
 */


 search = require('./../lib/search')


 exports.index = function(req, res) {
 	res.render('index', { title: 'Express'});
 };



 exports.search = function(req, res) {

 	var title = req.params.title; 	
 	result = search.search(title, function (title, result) {
 		res.render('search', { 
 			title: title,
 			results: JSON.stringify(result["Items"]["Item"])});
 	}); 	
 };



exports.error = function(req, res){
	res.render('error', {title: 'Ups..'});
}; 