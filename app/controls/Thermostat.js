'use strict';

let Control = require('./Control');

/**
 * Thermostat is a basic output control which accepts a temperature. When
 * the input device has a temperature lower than the target temperature, it
 * will activate the output (100%)
 */
class Thermostat extends Control {

  /**
   * Constructor accepts an input which will control the output
   * @param  {InputComponent} input  A temperature probe
   * @param  {OutputComponent} output A heat source
   */
  constructor(input, output) {
    super();

    this._type = 'Thermostat';
    this._input = input;
    this._output = output;

    this.addInput(input);
    this.addOutput(output);

    this._targetTemp = 0;

    this._active = false;
  }

  /**
   * Sets a target temperature for the thermostat. When the temperature reading
   * reads below this temperature, the output will be turned on and remain on
   * until the temperature reading falls below the target.
   */
  setTargetTemperature(target) {
    this._targetTemp = target;

    this._active = true;
  }
}

module.exports = Thermostat;
