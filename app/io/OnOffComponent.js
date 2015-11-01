'use strict';

let OutputComponent = require('./OutputComponent');

class OnOffComponent extends OutputComponent {

  constructor() {
    super();

    this._type = 'OnOffComponent';
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
