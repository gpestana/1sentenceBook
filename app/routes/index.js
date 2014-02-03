
/*
 * Routing handlers
 */


 search = require('./../lib/search')


 exports.index = function(req, res) {
 	res.render('index', { title: 'Express'});
 };



 exports.search = function(req, res) {

 	var title = req.params.title; 

 	res.render('search', result = callback(title), { 
 		title: title,
 		results: JSON.stringify(result["Items"]["Item"])}); 	

 };


 function callback(title) {

 	return search.search(title);

 	//console.log("CALLBACK");
/*
 	res.render('search', { 
 		title: title,
 		results: JSON.stringify(result["Items"]["Item"])});
 
*/
};


exports.test = function(req, res){
	res.render('test', { 
		title: 'Test motherfucker!!',
		param: req.params.var });
};



exports.error = function(req, res){
	res.render('error', {title: 'Ups..'});
}; 