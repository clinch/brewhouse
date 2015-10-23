'use strict';

let IOComponent = require('./IOComponent');

class OutputComponent extends IOComponent {

	constructor() {
		super();

		this._type = 'OutputComponent';
		this._inputs = [];
	}

	get inputs() {
		return this._inputs;
	}

	/**
	 * Output devices usually (but not always) depend on inputs. Add one or more
	 * input devices to this output using this method.
	 * @param {InputComponent} input An input component
	 * @return {int} An ID referring to the input.
	 */
	addInput(input) {
		this._inputs.push(input);

		return this._inputs.length - 1;
	}
}

module.exports = OutputComponent;