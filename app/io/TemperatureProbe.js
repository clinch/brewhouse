'use strict';

let InputComponent = require('./InputComponent');
let Sensor = require('ds18x20');

class TemperatureProbe extends InputComponent {
  
  constructor(probeAddress, name) {
    this._address = probeAddress;
    this._name = name;
    this._temperature = -274;
  }
  
  toString() {
    return `${this._name} (${this.address}) : ${this._temperature}`;  
  }
  
  /**
   * Begins taking temperature readings and firing events when it receives data.
   */
  start() {
    // TODO
  }

  /**
   * Stops taking temperature readings.
   */
  stop() {
    // TODO
  }

  
  /**
   * A static method that will return true if the temperature probe driver is
   * loaded. 
   * There's no need to check this for each probe. Only check it once.
   * 
   * @return {Boolean}  Returns true if the temperature probe driver is ready.
   */
  static isDriverLoaded() {
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