'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let constants = require('./constants');

let debug = require('debug')(`${constants.APP_NAME}:Server`);

class Server {
	constructor() {
		
	}

	init() {
		debug('Server is initializing.');

		this.app = express();

		// configure app to use bodyParser()
		// this will let us get the data from a POST
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());

		this.port = process.env.PORT || 8080;

		// ROUTES FOR OUR API
		this.router = express.Router();
		
		// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
		this.router.get('/', function(req, res) {
		    res.json({ message: 'hooray! welcome to our api!' });   
		});

		// more routes for our API will happen here

		// REGISTER OUR ROUTES
		// all of our routes will be prefixed with /api
		this.app.use('/api', this.router);

		// START THE SERVER
		this.app.listen(this.port);
		console.log('Magic happens on port ' + this.port);
	}
}

module.exports = Server;