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

}

module.exports = BrewFunction;
