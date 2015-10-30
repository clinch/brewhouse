'use strict';

let assert = require('assert');
let VirtualTemperatureProbe = require('../../../app/io/virtual/VirtualTemperatureProbe');

describe('VirtualTemperatureProbe', function() {
  let name = 'My Virtual Probe';

  let virtualProbe = new VirtualTemperatureProbe(name);

  describe('constructor()', function() {
    it('should initialize name', function() {
      assert.equal(name, virtualProbe._name);
    });
  });

  describe('isDriverLoaded()', function() {
    it('should always return true');
  });

});
