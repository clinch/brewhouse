'use strict';

let assert = require('assert');

let InputComponent = require('../../app/io/InputComponent');

describe('InputComponent', function() {
  describe('type', function() {
    it('should be set to InputComponent', function() {
      let ioComp = new InputComponent();
      assert.equal('InputComponent', ioComp.type);
    });
  });
});
