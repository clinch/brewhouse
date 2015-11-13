'use strict';

let assert = require('assert');

let IOComponent = require('../../app/io/IOComponent');

describe('IOComponent', function() {
  describe('type', function() {
    it('should be set to IOComponent', function() {
      let ioComp = new IOComponent();
      assert.equal('IOComponent', ioComp.type);
    });
  });
});
