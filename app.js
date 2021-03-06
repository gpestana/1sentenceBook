
/**
 * Module dependencies.
 */


 var express = require('express');
 var http = require('http');
 var routes = require('./app/routes');
 var path = require('path');

 var api = require ('./app/routes/api');

 var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}


/*
 * Routing table
 */
/*
app.get('/', routes.index);
app.get('/search/:title', routes.search);
app.get('*', routes.error);
*/

app.get('/', routes.index);
app.get('/showData', api.showData);


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});


