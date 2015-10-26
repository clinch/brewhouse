'use strict';

let assert = require('assert');

let Thermostat = require('../../app/controls/Thermostat');
let InputComponent = require('../../app/io/InputComponent');
let OutputComponent = require('../../app/io/OutputComponent');

describe('Thermostat', function() {
 	let control = new Thermostat();

  describe('type', function () {
    it('should be set to Thermostat', function () {
      assert.equal('Thermostat', control.type);
    });
  });



});