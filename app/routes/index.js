
/*
 * Routing handlers
 */

/*
 * Have to be completely changed to integrate with Angular:
 *   - routes are make call api.js <--> angular client side
 */


 search = require('./../lib/search')


 exports.index = function(req, res) {
 	res.render('index', { title: 'Express'});
 };



 exports.search = function(req, res) {

 	var title = req.params.title; 	
 	result = search.doSearch(title, function (title, result) {
 		res.render('search', { 
 			title: title,
 			results: JSON.stringify(result)
 		})
 	});
 } 	


 exports.error = function(req, res){
 	res.render('error', {title: 'Ups..'});
 }; 