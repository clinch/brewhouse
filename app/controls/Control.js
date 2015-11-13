'use strict';

let EventEmitter = require('events').EventEmitter;

class Control extends EventEmitter {

  constructor() {
    super();

    this._type = 'Control';
    this._inputs = [];
    this._outputs = [];

    this._active = false;
  }

  get type() {
    return this._type;
  }

  get inputs() {
    return this._inputs;
  }

  get outputs() {
    return this._outputs;
  }

  /**
   * Sets parameters that are specific to this Control.
   */
  setParameters(paramObject) {
    
  }

  /**
   * Adds an input device to be controlled.
   * @param {InputComponent} input An input component
   * @return {int} An ID referring to the input.
   */
  addInput(input) {
    this._inputs.push(input);

    return this._inputs.length - 1;
  }

  /**
   * Adds an output device to be controlled
   * @param {OutputComponent} output An output component
   * @return {int} An ID referring to the output.
   */
  addOutput(output) {
    this._outputs.push(output);

    return this._outputs.length - 1;
  }

  /**
   * Starts this control.
   */
  start() {
    this._active = true;
  }
}

module.exports = Control;
