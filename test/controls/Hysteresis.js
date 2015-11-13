'use strict';

let assert = require('assert');

let Thermostat = require('../../app/controls/Hysteresis');
let InputComponent = require('../../app/io/InputComponent');
let OutputComponent = require('../../app/io/OutputComponent');

describe('Hysteresis', function() {
  let control = new Thermostat();

  describe('type', function() {
    it('should be set to Hysteresis', function() {
      assert.equal('Hysteresis', control.type);
    });
  });

});
