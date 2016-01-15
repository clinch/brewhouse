'use strict';

let assert = require('assert');
let VirtualTemperatureProbe = require('../../../app/io/virtual/VirtualTemperatureProbe');

describe('VirtualTemperatureProbe', function() {
  let name = 'My Virtual Probe';

  let virtualProbe = new VirtualTemperatureProbe(name, { address: 'virtual-probe-test-address' });

  describe('constructor()', function() {
    it('should initialize name', function() {
      assert.equal(name, virtualProbe._name);
    });
  });

  describe('isDriverLoaded()', function() {
    it('should always return true', function() {
      assert(virtualProbe.isDriverLoaded());
    });
  });

  describe('set temperature()', function() {
    it('should set the temperature to a value', function() {
      let temps = [-10, 0, 10, 100];
      temps.forEach((temp) => {
        virtualProbe.temperature = temp;
        assert.equal(temp, virtualProbe.temperature);
      });
    });
  });

});
