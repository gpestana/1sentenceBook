
/*
 * Routing handlers
 */

 var aws = require("aws-lib");
 //export values from a .gitignore file
 var aws_credentials = require("./../../private_credentials") 
 
 var sk = aws_credentials.getSerialKey();
 var ak = aws_credentials.getActivationKey();
 var tag = aws_credentials.getTag();

 exports.index = function(req, res) {

 	var prodAdv = aws.createProdAdvClient(ak, sk, tag);

 	var options = {SearchIndex: "Books", Keywords: "Javascript"}

 	prodAdv.call("ItemSearch", options, function(err, result) {
 		console.log(result);
 	})

 	res.render('index', { title: 'Express' });
 };

 exports.test = function(req, res){
 	res.render('test', { 
 		title: 'Test motherfucker!!',
 		param: req.params.var });
 };

 exports.error = function(req, res){
 	res.render('error', {title: 'Ups..'});
 }; 