'use strict';

let assert = require('assert');

let BrewFunctionManager = require('../app/BrewFunctionManager');

describe('BrewFunctionManager', function() {
  describe('getBrewFunction()', function() {
    it('be able to retrieve the virtual kettle by name', function() {
      let obj = BrewFunctionManager.getBrewFunction('Virtual Kettle');
      assert.equal('Virtual Kettle', obj.name);
      assert.equal('Hysteresis', obj.control.type);
    });

  });

});
