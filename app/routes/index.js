
/*
 * Routing handlers
 */

 var aws = require("aws-lib");

 /* export values from a file marked as .gitignore --> Create your own with 
 your credentials */
 var aws_credentials = require("./../../private_credentials") 
 var sk = aws_credentials.getSerialKey();
 var ak = aws_credentials.getActivationKey();
 var tag = aws_credentials.getTag();



 exports.index = function(req, res) {
 	res.render('index', { title: 'Express'});
 };



 exports.search = function(req, res) {

 	var prodAdv = aws.createProdAdvClient(ak, sk, tag);
 	var options = {SearchIndex: "Books", Title: req.params.title, IdType: "ISBN"}

 	prodAdv.call("ItemSearch", options, function(err, result) {
 		console.log("Results for '"+ req.params.title+"'");
 		console.log(result);

 		res.render('search', { 
 		title: req.params.title,
 		results: JSON.stringify(result["Items"]["Item"])});
 	});

 }



 exports.test = function(req, res){
 	res.render('test', { 
 		title: 'Test motherfucker!!',
 		param: req.params.var });
 };



 exports.error = function(req, res){
 	res.render('error', {title: 'Ups..'});
 }; 