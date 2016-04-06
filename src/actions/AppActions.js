/**
 * Created by abdul on 06/04/2016.
 */
var AppDispatcher = require('../AppDispatcher.js');
var Constants = require('../constants/ActionTypes.js')

var AppActions = {
  doSearch: function(location) {
    console.log('App Action -->', location);
    /*AppDispatcher.dispatch({
      actionType: Constants.DO_SEARCH,
      data: location
    });*/
  }
};

module.exports = AppActions;
