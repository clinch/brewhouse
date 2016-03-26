'use strict';

let constants = require('./constants');
let debug = require('debug')(`${constants.APP_NAME}:BrewFunction`);

class BrewFunction {
  constructor(name, control, description) {
    this._name = name;
    this._control = control;
    this._description = description;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get description() {
    return this._description;
  }

  get control() {
    return this._control;
  }

  /**
   * @return {Boolean} Returns true if our control is active. False otherwise
   */
  get active() {
    return this._control.active;
  }

  /**
   * Starts the brew function by starting the control
   */
  start() {
    this._control.start();
  }

  /**
   * Stops the brew function's control
   */
  stop() {
    this._control.stop();
  }
}

module.exports = BrewFunction;
