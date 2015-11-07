'use strict';

let IOComponent = require('./IOComponent');

//let Gpio = require('onoff').Gpio;

class OutputComponent extends IOComponent {

  /**
   * Constructor
   * @param  {Number} gpioPin The pin number to access the GPIO.
   */
  constructor(gpioNumber) {
    super();

    this._type = 'OutputComponent';

    this._gpioNumber = gpioNumber;
  }

  /**
   * Sets up our GPIO pin for writing.
   */
  initPin() {
    if (this._gpioNumber == undefined) {
      throw new Error('GPIO pin number must be set before we can initialize.');
    }

    //    this._pin = new Gpio(this._gpioNumber, 'out');
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
