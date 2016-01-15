'use strict';

let assert = require('assert');
let constants = require('../../app/constants');
let TemperatureProbe = require('../../app/io/TemperatureProbe');

describe('TemperatureProbe', function() {
  let name = 'Probe #1';
  let address = '28-000000000000';

  let ioComp = new TemperatureProbe(name, { address: address });

  describe('type', function() {
    it('should be set to TemperatureProbe', function() {
      assert.equal('TemperatureProbe', ioComp.type);
    });
  });

  describe('constructor()', function() {
    it('should initialize name and address', function() {
      assert.equal(address, ioComp._address);
      assert.equal(name, ioComp._name);
    });
  });

  describe('start()', function() {
    it('should emit a data event after starting', function(done) {
      this.timeout(constants.TICK_INTERVAL + 1000);
      ioComp.on('data', (temp) => {
        ioComp.stop();
        ioComp.removeAllListeners('data');
        done();
      });

      ioComp.start();
    });
  });

  describe('stop()', function() {
    it('should not emit a data event if stopped before tick', function(done) {
      this.timeout(constants.TICK_INTERVAL + 2000);

      setTimeout(() => {
        ioComp.stop();
        ioComp.removeAllListeners('data');
        done();
      }, constants.TICK_INTERVAL - 1000);
      
      ioComp.on('data', (temp) => {
        throw new Error('Data received before timeout.');
      });

      ioComp.start();
    });
  });

  describe('isDriverLoaded()', function() {
    it('should return a boolean value (true or false)', function() {
      assert.equal(typeof ioComp.isDriverLoaded(), 'boolean');
    });
  });

  describe('get temperature()', function() {
    it('should return a default value of -274', function() {
      assert.strictEqual(constants.ABSOLUTE_ZERO, ioComp.temperature);
    });
  });

  describe('set temperature()', function() {
    it('should not allow setting of temperature manually', function() {
      assert.throws(() => ioComp.temperature = 0, Error);
    });
  });

});
