'use strict';

let assert = require('assert');

let Control = require('../../app/controls/Control');
let InputComponent = require('../../app/io/InputComponent');
let OutputComponent = require('../../app/io/OutputComponent');

describe('Control', function() {
  let control = new Control();

  describe('type', function() {
    it('should be set to Control', function() {
      assert.equal('Control', control.type);
    });
  });

  describe('addInput()', function() {
    let input = new InputComponent();

    it('should increase the input count by 1', function() {
      let inputCount = control.inputs.length;
      control.addInput(input);
      assert.equal(inputCount + 1, control.inputs.length);
    });

    it('should return the ID of the input to retrieve it later', function() {
      let input2 = new InputComponent();
      let id = control.addInput(input2);
      assert.strictEqual(control.inputs[id], input2);
    });
  });

  describe('addOutput()', function() {
    let output = new OutputComponent('Test Output', { gpio: 0 });

    it('should increase the output count by 1', function() {
      let outputCount = control.outputs.length;
      control.addOutput(output);
      assert.equal(outputCount + 1, control.outputs.length);
    });

    it('should return the ID of the output to retrieve it later', function() {
      let output2 = new OutputComponent('Test Output 2', { gpio: 0 });
      let id = control.addOutput(output2);
      assert.strictEqual(control.outputs[id], output2);
    });
  });

});
