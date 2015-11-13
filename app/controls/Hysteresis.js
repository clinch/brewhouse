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

  }

  /**
   * Adds an input device to be controlled.
   * @param  {TemperatureProbe} temperatureProbe  A temperature probe
   * @return {int} An ID referring to the input.
   */
  addInput(input) {
    super.addInput(input);

    this._temperatureProbe = input;
    debug('Temp probe added %s', this._temperatureProbe.address);
  }

  /**
   * Adds an output device to be controlled
   * @param  {OutputComponent} output A heat source
   * @return {int} An ID referring to the output.
   */
  addOutput(output) {
    super.addOutput(output);

    this._output = output;
    debug('Temp output %s', this._output.gpio);
  }

  /**
   * Starts listening for temperature updates.
   */
  start() {
    super.start();

    debug('Hysteresis is starting.');

    this._temperatureProbe.on('data', this.checkTemperature);
  }

  /**
   * Temperatures are fed by the temperature probe, and we compare temperature
   * to our target temperature.
   * @param  {Number} temperature The temperature of the probe, in Celsius
   */
  checkTemperature(temperature) {
    debug('Got temperature reading of %d', temperature);
  }
}

module.exports = Hysteresis;
