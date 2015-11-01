'use strict';

let Control = require('./Control');
let constants = require('../constants');

/**
 * Thermostat is a basic output control which accepts a temperature. When
 * the input device has a temperature lower than the target temperature, it
 * will activate the output (100%)
 */
class Thermostat extends Control {

  /**
   * Constructor accepts a temperature probe which will control the output
   * @param  {TemperatureProbe} temperatureProbe  A temperature probe
   * @param  {OutputComponent} output A heat source
   */
  constructor(temperatureProbe, output) {
    super();

    this._type = 'Thermostat';
    this._temperatureProbe = temperatureProbe;
    this._output = output;

    this.addInput(temperatureProbe);
    this.addOutput(output);

    this._targetTemperature = constants.ABSOLUTE_ZERO;

    this._active = false;
  }

  /**
   * Sets a target temperature for the thermostat. When the temperature reading
   * reads below this temperature, the output will be turned on and remain on
   * until the temperature reading falls below the target.
   */
  setTargetTemperature(target) {
    this._targetTemperature = target;

    this._active = true;
  }
}

module.exports = Thermostat;
