'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let nconf = require('nconf');

let constants = require('./constants');

let debug = require('debug')(`${constants.APP_NAME}:Server`);

class Server {
	constructor() {
		
	}

	/**
	 * Called once at the very start of this app. Initializes all components and
	 * starts the server.
	 */
	init() {
		debug('Server is initializing.');

		this.app = express();

		this.initConfig();

		// configure app to use bodyParser()
		// this will let us get the data from a POST
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());

		this.port = nconf.get('port') || 8080;

		// ROUTES FOR OUR API
		this.router = express.Router();
		
		// Default route will output information that will be useful to API consumers
		this.router.get('/', function(req, res) {
				// npm_package_version is set as an env variable when using 'npm start'
				if (!nconf.get('npm_package_version')) {
					throw new Error(`No npm version available. Launch server with 'npm start'`);
				}
		    res.json({ version: nconf.get('npm_package_version') });   
		});

		// more routes for our API will happen here

		// REGISTER OUR ROUTES
		// all of our routes will be prefixed with /api
		this.app.use('/api', this.router);

		// START THE SERVER
		this.app.listen(this.port);
		console.log(`The server is now up and running on port ${this.port}`);
	}

	/**
	 * Initializes any config file options and specifies config file location
	 */
	initConfig() {
		nconf.argv()
   		.env()
   		.file({ file: './config/config.json' });
	}
}

module.exports = Server;