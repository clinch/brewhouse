'use strict';

let assert = require('assert');

let BrewFunctionManager = require('../app/BrewFunctionManager');
let BrewFunction = require('../app/BrewFunction');
let virtualKettle;

describe('BrewFunction', function() {

  before(function() {
    virtualKettle = BrewFunctionManager.getBrewFunction('Virtual Kettle');
  });

  describe('BrewFunction', function() {
    it('should have default parameters set after constructor', function() {
      assert.equal('Virtual Kettle', virtualKettle.name);
      assert.equal('Hysteresis', virtualKettle.control.type);
    });
  });

  describe('start()', function() {
    it('starts and becomes active', function() {
      virtualKettle.start();
      assert(virtualKettle.active);
    });
  });

  describe('stop()', function() {
    it('stops and becomes inactive', function() {
      virtualKettle.stop();
      assert.equal(false, virtualKettle.active);
    });
  });

});
