/**
 * Created by abdul on 06/04/2016.
 */
var AppDispatcher = require('../AppDispatcher.js');
var Constants = require('../constants/ActionTypes.js');
var Assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var AppStore = Assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback
AppDispatcher.register(function(action){
  console.log('AppStore -->', action);
});

module.export = AppStore;
