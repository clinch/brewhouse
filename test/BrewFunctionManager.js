'use strict';

let assert = require('assert');

let BrewFunctionManager = require('../app/BrewFunctionManager');

describe('BrewFunctionManager', function() {
  describe('getBrewFunction()', function() {
    it('be able to retrieve the virtual kettle by name', function() {
      let brewFunction = BrewFunctionManager.getBrewFunction('Virtual Kettle');
      assert.equal('Virtual Kettle', brewFunction.name);
    });

  });

});
