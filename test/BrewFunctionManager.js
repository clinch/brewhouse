'use strict';

let assert = require('assert');

let BrewFunctionManager = require('../app/BrewFunctionManager');
let brewFunction;

describe('BrewFunctionManager', function() {
  describe('getBrewFunction()', function() {
    it('be able to retrieve the virtual kettle by name', function() {
      brewFunction = BrewFunctionManager.getBrewFunction('Virtual Kettle');
      assert.equal('Virtual Kettle', brewFunction.name);
    });

    it('should start the brew function', function() {
      brewFunction.start();
      assert(brewFunction.active);
    });
  });

  describe('getAllBrewFunctions', function() {
    it('should return all available brew functions');
  });

});
