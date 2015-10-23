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

		this._app = express();

		this.initConfig();

		// configure app to use bodyParser()
		// this will let us get the data from a POST
		this._app.use(bodyParser.urlencoded({ extended: true }));
		this._app.use(bodyParser.json());

		this._port = nconf.get('port') || 8080;

		// ROUTES FOR OUR API
		this._router = express.Router();
		
		// Default route will output information that will be useful to API consumers
		this._router.get('/', function(req, res) {
				// npm_package_version is set as an env variable when using 'npm start'
				if (!nconf.get('npm_package_version')) {
					throw new Error(`No npm version available. Launch server with 'npm start'`);
				}
		    res.json({ version: nconf.get('npm_package_version') });   
		});

		// more routes for our API will happen here

		// REGISTER OUR ROUTES
		// all of our routes will be prefixed with /api
		this._app.use('/api', this._router);

		// START THE SERVER
		this._app.listen(this._port);
		console.log(`The server is now up and running on port ${this._port}`);
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