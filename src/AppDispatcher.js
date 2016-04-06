/*
 * A singleton that operates as the central hub for application updates.
 * For more information visit https://facebook.github.io/flux/
 */

'use strict';

var {Dispatcher} = require('flux');

var AppDispatcher = new Dispatcher({
  logLevel: 'ALL'
});

module.exports = AppDispatcher;
