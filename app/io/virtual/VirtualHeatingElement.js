'use strict';

let OnOffComponent = require('../OnOffComponent');

/**
 * A virtual heating element includes a readable stream which outputs temperature changes
 * as the heating element increases its temperature.
 */
class VirtualHeatingElement extends OnOffComponent {

  /**
   * Makes a new "virtual" heating element
   * @param  {String} name The name of this output component
   * @param {Object} parameters Any number of required parameters
   */
  constructor(name, parameters) {
    super(name, parameters);
  }

  initPin() {
    // We needn't do anything here since we're not dealing with real pins.
  }

}

module.exports = VirtualHeatingElement;
