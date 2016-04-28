import AppDispatcher from '../AppDispatcher.js';
import Constants from '../constants/ActionTypes.js';

var AppActions = {
  doSearch: function(location) {
    console.log('App Action -->', location);
    AppDispatcher.dispatch({
      actionType: Constants.DO_SEARCH,
      data: location
    });
  }
};

module.exports = AppActions;
