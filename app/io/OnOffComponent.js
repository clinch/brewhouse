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

    this._status = 0;   // 0 = off, 1 = on

    this.initPin();
  }

  /**
   * Turns the component on.
   */
  on() {
    this._status = 1;
  }

  /**
   * Turns the component off.
   */
  off() {
    this._status = 0;
  }

  /**
   * Is this component on?
   * @return {Boolean} true if on.
   */
  isOn() {
    return this._status === 1;
  }

  /**
   * Is this component off?
   * @return {Boolean} true if off.
   */
  isOff() {
    return this._status === 0;
  }
}

module.exports = OnOffComponent;
