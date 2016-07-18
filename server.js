var express = require('express'),
	app = express();

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});




/*var express  = require('express');

var app = express();

app.set('env', 'development'); // By default set to 'development'

app.configure('development', function() {
	// Set server port
	app.set('port', process.env.PORT || 3000);
	// Set views folder path
	app.set('views', __dirname + '/views');
	// Set EJS as server templating system. Now we may not specify extension in res.render()
	app.set('view engine', 'html');
	// Register ejs as .html. Now we must name our views example.html instead of example.ejs
	app.engine('.html', require('ejs').__express);
	// Specify which folder NodeJs won't handle
	app.use(express.static(__dirname + '/app'));
	// Repacement for depricated express.bodyParser()
	app.use(express.json());
	app.use(express.urlencoded());
	// app.use(express.multipart()); - Depricated, but without it images upload won't work (or we can use other tool app.use(require('connect-multipart')()))

	// app.use(express.compress());

	// Connect to DB (local connection)
	mongoose.connect('mongodb://localhost/ChatDB');
	// Connection events
	// When successfully connected
	mongoose.connection.on('connected', function () {
	  console.log('Connected to Mongoose');
	});
	// If the connection throws an error
	mongoose.connection.on('error', function (err) {
	  error.log('Could not connect to Mongoose: ' + err);
	});
	// When the connection is disconnected
	mongoose.connection.on('disconnected', function () {
	  console.log('Disconnected from Mongoose');
	});
	// If the Node process ends, close the Mongoose connection
	process.on('SIGINT', function() {
		mongoose.connection.close(function () {
			console.log('Mongoose default connection disconnected through app termination');
			process.exit(0);
		});
	});
});*/