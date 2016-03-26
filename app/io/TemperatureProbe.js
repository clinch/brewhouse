'use strict';

let constants = require('../constants');
let debug = require('debug')(`${constants.APP_NAME}:TemperatureProbe`);
let InputComponent = require('./InputComponent');
let Sensor = require('ds18x20');

class TemperatureProbe extends InputComponent {
  /**
   * Creates new temperature probe input
   * @param  {String} name         A human-readable name for this probe
   * @param  {Object} parameters   Any extra parameters that are needed.
   */
  constructor(name, parameters) {
    super();

    this._type = 'TemperatureProbe';

    this._address = parameters.address;
    this._name = name;
    this._temperature = constants.ABSOLUTE_ZERO;
  }

  toString() {
    return `${this._name} (${this.address}) : ${this._temperature}`;
  }

  get temperature() {
    return this._temperature;
  }

  /**
   * This setter may be implemented in virtual temperature probes.
   */
  set temperature(newTemp) {
    throw new Error(`${this._type} contains read-only temperatures. You cannot set it manually`);
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
  }

  /**
   * Begins taking temperature readings and firing events when it receives data.
   */
  start() {
    if (this._timer != undefined) {
      clearInterval(this._timer);
    }

    this._timer = setInterval(this.tick.bind(this), constants.TICK_INTERVAL);
  }

  /**
   * Stops taking temperature readings.
   */
  stop() {
    if (this._timer != undefined) {
      clearInterval(this._timer);
    }

    this._timer = undefined;
  }

  /**
   * At every interval, this method is called which can log data.
   */
  tick() {
    if (TemperatureProbe.IS_DRIVER_LOADED) {
      try {
        this._temperature = Sensor.get(this._address);
      } catch (err) {
        console.log(Error(err));
      }
    }

    this.reportTemperature();
  }

  /**
   * Emits the current temperature to any listeners
   */
  reportTemperature() {
    debug(this.toString());

    this.emit('data', this._temperature);
  }

  /**
   * A static method that will return true if the temperature probe driver is
   * loaded.

   * There's no need to check this for each probe. Only check it once.
   *

   * @return {Boolean}  Returns true if the temperature probe driver is ready.
   */
  isDriverLoaded() {
    let loaded = TemperatureProbe.IS_DRIVER_LOADED;

    // If we know it's loaded, we don't need to ask again.
    if (!loaded) {
      loaded = Sensor.isDriverLoaded();
      TemperatureProbe.IS_DRIVER_LOADED = loaded;
    }

    return loaded;
  }

}

// A static variable to keep track of whether it's loaded or not.
TemperatureProbe.IS_DRIVER_LOADED = false;

module.exports = TemperatureProbe;
