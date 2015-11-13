'use strict';

let EventEmitter = require('events').EventEmitter;

class IOComponent extends EventEmitter {

  constructor() {
    super();

    this._type = 'IOComponent';
  }

  get type() {
    return this._type;
  }

}

module.exports = IOComponent;
