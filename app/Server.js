'use strict';

let constants = require('./constants');

let debug = require('debug')(`${constants.APP_NAME}:Server`);

class Server {
	constructor() {
		
	}

	init() {
		debug('Server is initializing.');
	}
}

module.exports = Server;