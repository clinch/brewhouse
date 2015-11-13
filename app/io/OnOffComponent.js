'use strict';

let OutputComponent = require('./OutputComponent');

class OnOffComponent extends OutputComponent {

  /**
   * Constructor
   * @param  {String} name The name of this output component
   * @param {Object} parameters Any number of required parameters
   */
  constructor(name, parameters) {
    super(name, parameters);

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
