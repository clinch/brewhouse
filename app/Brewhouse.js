'use strict';

let constants = require('./constants');

let debug = require('debug')(`${constants.APP_NAME}:Brewhouse`);

class Brewhouse {
	constructor() {
		debug('Constructor');
	}

	init() {
		debug('Init');
	}
}

module.exports = Brewhouse;