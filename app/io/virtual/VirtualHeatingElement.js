'use strict';

let OutputComponent = require('../OutputComponent');

/**
 * A virtual heating element includes a readable stream which outputs temperature changes
 * as the heating element increases its temperature.
 */
class VirtualHeatingElement extends OutputComponent {

  /**
   * Makes a new "virtual" heating element
   */
  constructor() {
    super();
  }

  /**
   * Readable stream will be used to report temperatures as the element changes
   * @return {Stream} A readable stream of temperature changes.
   */
  createReadStream() {

  }

}

module.exports = VirtualHeatingElement;
