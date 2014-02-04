 var aws = require("aws-lib");

 /* export values from a file marked as .gitignore --> Create your own with 
 your credentials */
 var aws_credentials = require("./../../private_credentials") 
 var sk = aws_credentials.getSerialKey();
 var ak = aws_credentials.getActivationKey();
 var tag = aws_credentials.getTag();


/*
 * - doSearch(title, render_results[callback])
 * Interface for Amazon request.
 */

 exports.doSearch = function(title, render_result) {

 	var prodAdv = aws.createProdAdvClient(ak, sk, tag);
 	var options = {SearchIndex: "Books", Title: title, IdType: "ISBN"}

 	prodAdv.call("ItemSearch", options, function (err, result) {

 		//If err....
 		parseResponse(title, result, render_result);
 	});
 }



function parseResponse(title, result, render_result) {
	ASIN = result['Items']['Item'][0]['ASIN'];
	detailPageUrl = result['Items']['Item'][0]['DetailPageURL'];

	render_result(title, {'ASIN': ASIN, 'URL': detailPageUrl});
}