'use strict';

let IOComponent = require('./IOComponent');

class OutputComponent extends IOComponent {

  /**
   * Constructor
   * @param  {String} name The name of this output component
   * @param {Object} parameters Any number of required parameters
   */
  constructor(name, parameters) {
    super();

    this._type = 'OutputComponent';

    this._gpioNumber = parameters.gpio;
  }

  /**
   * Sets up our GPIO pin for writing.
   */
  initPin() {
    if (this._gpioNumber == undefined) {
      throw new Error('GPIO pin number must be set before we can initialize.');
    }

  }

  /**
   * When the application exits, we need to clean up the pins that we were working with.
   */
  cleanup() {
    if (this._pin != undefined) {
      this._pin.unexport();
    }
  }

}

module.exports = OutputComponent;
