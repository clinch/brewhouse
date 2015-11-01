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
    super();
  }

}

module.exports = VirtualHeatingElement;
