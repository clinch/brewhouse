'use strict';

let assert = require('assert');

let OutputComponent = require('../../app/io/OutputComponent');
let InputComponent = require('../../app/io/InputComponent');

describe('OutputComponent', function() {
 	let ioComp = new OutputComponent();

  describe('type', function () {
    it('should be set to OutputComponent', function () {
      assert.equal('OutputComponent', ioComp.type);
    });
  });

  describe('addInput()', function() {
  	let input = new InputComponent();

  	it('should increase the input count by 1', function() {
  		let inputCount = ioComp.inputs.length;
  		ioComp.addInput(input);
  		assert.equal(inputCount + 1, ioComp.inputs.length);
  	});

  	it('should return the ID of the input to retrieve it later', function() {
  		let input2 = new InputComponent();
  		let id = ioComp.addInput(input2);
  		assert.strictEqual(ioComp.inputs[id], input2);
  	});
  });
});