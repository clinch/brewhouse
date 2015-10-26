'use strict';

let IOComponent = require('./IOComponent');

class OutputComponent extends IOComponent {

	constructor() {
		super();

		this._type = 'OutputComponent';
	}

}

module.exports = OutputComponent;