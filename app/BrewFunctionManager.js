'use strict';

let constants = require('./constants');
let debug = require('debug')(`${constants.APP_NAME}:BrewFunctionManager`);
let slug = require('slug');

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
   * @return {Object}      The brew function, or null if it doesn't exist
   */
  static getBrewFunction(name) {
    let path = __dirname + '/brewFunctions/' + slug(name, {lower: true}) + '.json';

    // This is a **synchronous** and **cached** way of requesting the file.
    let brewFunctionObj = require(path);

    return brewFunctionObj;
  }

  /**
   * Saves the brew function to the list of brew functions for later use
   * @param  {Obejct} brewFunction A brew function object
   */
  static saveBrewFunction(brewFunction) {

  }
}

module.exports = BrewFunctionManager;
