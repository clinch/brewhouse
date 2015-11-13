'use strict';

let TemperatureProbe = require('../TemperatureProbe');

/**
 * A virtual temperature probe includes will have it's address set manually.
 */
class VirtualTemperatureProbe extends TemperatureProbe {

  /**
   * Makes a new "virtual" temperature probe
   * @param  {String} name A human readable identifier for this probe
   */
  constructor(name, parameters) {
    super(name, parameters);
  }

  /**
   * This getter is also required because we are overriding the setter (below)
   */
  get temperature() {
    return this._temperature;
  }

  /**
   * Sets a new temperature on this virtual temperature probe
   * @param  {Number} newTemp The new temperature in Celsius
   */
  set temperature(newTemp) {
    this._temperature = newTemp;
  }

  /**
   * A static method that will return true for virtual temperature probe
   * @return {Boolean}  Returns true if the temperature probe driver is ready.
   */
  isDriverLoaded() {
    return true;
  }

  /**
   * At every interval, this method is called which can log data.
   */
  tick() {
    this.reportTemperature();
  }

}

module.exports = VirtualTemperatureProbe;
