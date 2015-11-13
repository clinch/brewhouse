'use strict';

let constants = require('./constants');
let debug = require('debug')(`${constants.APP_NAME}:BrewFunctionManager`);
let slug = require('slug');
let fs = require('fs');
let BrewFunction = require('./BrewFunction');

class BrewFunctionManager {
  constructor() {
    throw new Error('Do not instantiate the BrewFunctionManager static class.');
  }

  /**
   * Returns a complete list of all brew functions available with a description for each
   * @return {Array} An array of brew functions, each with name and description
   */
  static getAllBrewFunctions() {

  }

  /**
   * Retrieves a specific brew function by name
   * @param  {String} name The name (case-sensitive) of the brew function
   * @return {Object}      The BrewFunction, or null if it doesn't exist
   */
  static getBrewFunction(name) {
    let path = __dirname + '/brewFunctions/' + slug(name, {lower: true}) + '.json';
    let contents;
    let jsonObj;
    let brewFunction;
    let control;

    // This is a **synchronous** way of requesting the file contents
    try {
      contents = fs.readFileSync(path);
    } catch (error) {
      throw new Error('Cannot load brew function path.');
    }

    jsonObj = JSON.parse(contents);

    // Every brew function file contains a "version" parameter. We can perform
    // additional functionality for future versions based off this.

    // Load the control dynamically from a JSON file.
    try {
      let CustomFunction = require('./controls/' + jsonObj.control.type);
      control = new CustomFunction();
    } catch (error) {
      throw new Error('Unable to load control dynamically.');
    }
    
    control.setParameters(jsonObj.control.parameters);

    jsonObj.inputs.forEach((input) => {
      let CustomInput = require('./io/' + input.type);
      let newInput = new CustomInput(input.name, input.parameters);
      control.addInput(newInput);
    });
    jsonObj.outputs.forEach((output) => {
      let CustomOutput = require('./io/' + output.type);
      let newOutput = new CustomOutput(output.name, output.parameters);
      control.addOutput(newOutput);
    });

    brewFunction = new BrewFunction(jsonObj.name, control);

    return brewFunction;
  }

  /**
   * Saves the brew function to the list of brew functions for later use
   * @param  {Obejct} brewFunction A brew function object
   */
  static saveBrewFunction(brewFunction) {

  }
}

module.exports = BrewFunctionManager;
