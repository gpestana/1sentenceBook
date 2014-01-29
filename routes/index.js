
/*
 * Main Routing table
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.test = function(req, res){
  res.render('test', { title: 'Test motherfucker!!' });
};

exports.error = function(req, res){
	res.render('error', {title: 'Ups..'});
}; 