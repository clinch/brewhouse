'use strict';

let IOComponent = require('./IOComponent');

class InputComponent extends IOComponent {

  constructor() {
    super();

    this._type = 'InputComponent';
  }

}

module.exports = InputComponent;
