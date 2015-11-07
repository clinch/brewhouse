'use strict';

let OutputComponent = require('./OutputComponent');

class OnOffComponent extends OutputComponent {

  constructor(gpioNumber) {
    super(gpioNumber);

    this._type = 'OnOffComponent';

    this.initPin();
  }

  /**
   * Turns the component on.
   */
  on() {

  }

  /**
   * Turns the component off.
   */
  off() {

  }
}

module.exports = OnOffComponent;
