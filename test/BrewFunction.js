'use strict';

let assert = require('assert');

let BrewFunctionManager = require('../app/BrewFunctionManager');
let BrewFunction = require('../app/BrewFunction');
let brewFunction;

describe('BrewFunction', function() {

  before(function() {
    brewFunction = BrewFunctionManager.getBrewFunction('Virtual Kettle');
    assert.equal('Virtual Kettle', brewFunction.name);
  });

  describe('start()', function() {
    it('starts and becomes active', function() {
      brewFunction.start();
      assert(brewFunction.active);
    });
  });

  describe('stop()', function() {
    it('stops and becomes inactive', function() {
      brewFunction.stop();
      assert.equal(false, brewFunction.active);
    });
  });

});
