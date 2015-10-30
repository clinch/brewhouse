'use strict';

let assert = require('assert');

let OutputComponent = require('../../app/io/OutputComponent');

describe('OutputComponent', function() {
  let ioComp = new OutputComponent();

  describe('type', function() {
    it('should be set to OutputComponent', function() {
      assert.equal('OutputComponent', ioComp.type);
    });
  });

});
