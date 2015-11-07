'use strict';

let OnOffComponent = require('../OnOffComponent');

/**
 * A virtual heating element includes a readable stream which outputs temperature changes
 * as the heating element increases its temperature.
 */
class VirtualHeatingElement extends OnOffComponent {

  /**
   * Makes a new "virtual" heating element
   */
  constructor() {
    // 0 can be passed since we never need an actual GPIO pin
    super(0);
  }

  initPin() {
    // We needn't do anything here since we're not dealing with real pins.
  }

}

module.exports = VirtualHeatingElement;
