'use strict';

let TemperatureProbe = require('../TemperatureProbe');

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
}

module.exports = VirtualTemperatureProbe;
