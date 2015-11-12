'use strict';

let Control = require('./Control');
let constants = require('../constants');
let debug = require('debug')(`${constants.APP_NAME}:Hysteresis`);

/**
 * Thermostat is a basic output control which accepts a temperature. When
 * the input device has a temperature lower than the target temperature, it
 * will activate the output (100%)
 */
class Hysteresis extends Control {

  /**
   * Constructor accepts a temperature probe which will control the output
   */
  constructor() {
    super();

    this._type = 'Hysteresis';

    this._targetTemperature = constants.ABSOLUTE_ZERO;
    this._delta = 0;

    this._active = false;
  }

  /**
   * Sets a target temperature for the thermostat. When the temperature reading
   * reads below this temperature, the output will be turned on and remain on
   * until the temperature reading falls below the target.
   */
  setParameters(paramObject) {
    this._targetTemperature = paramObject.target;
    this._delta = paramObject.delta;

    debug('Set params to %d and %d', this._targetTemperature, this._delta);

    this._active = true;
  }

  /**
   * Adds an input device to be controlled.
   * @param  {TemperatureProbe} temperatureProbe  A temperature probe
   * @return {int} An ID referring to the input.
   */
  addInput(input) {
    super.addInput(input);

    this._temperatureProbe = input;
  }

  /**
   * Adds an output device to be controlled
   * @param  {OutputComponent} output A heat source
   * @return {int} An ID referring to the output.
   */
  addOutput(output) {
    super.addOutput(output);

    this._output = output;
  }
}

module.exports = Hysteresis;
