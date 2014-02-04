 var aws = require("aws-lib");

 /* export values from a file marked as .gitignore --> Create your own with 
 your credentials */
 var aws_credentials = require("./../../private_credentials") 
 var sk = aws_credentials.getSerialKey();
 var ak = aws_credentials.getActivationKey();
 var tag = aws_credentials.getTag();


 exports.search = function(title, c_back) {

 	var prodAdv = aws.createProdAdvClient(ak, sk, tag);
 	var options = {SearchIndex: "Books", Title: title, IdType: "ISBN"}

 	prodAdv.call("ItemSearch", options, function(err, result) {
 		console.log("Results for '"+ title+"'");
 		console.log(result);
 		
 		c_back(title, result);

 	});
 }
