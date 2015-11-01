'use strict';

let TemperatureProbe = require('../TemperatureProbe');

/**
 * A virtual temperature probe includes a writable stream to be able to input
 * temperature changes to this probe.
 */
class VirtualTemperatureProbe extends TemperatureProbe {

  /**
   * Makes a new "virtual" temperature probe
   * @param  {String} name A human readable identifier for this probe
   */
  constructor(name) {
    super('virtual-address', name);
  }

  /**
   * At every interval, this method is called which can log data.
   */
  tick() {
    this._temperature = 54;
    
    this.reportTemperature();
  }

  /**
   * Writable stream will be used to input temperatures
   * @return {Stream} A writable stream of temperature changes.
   */
  createWriteStream() {

  }  
}

module.exports = VirtualTemperatureProbe;
