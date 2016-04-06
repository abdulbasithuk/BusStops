/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions.js');

var SearchBox = React.createClass({

  onChange(event){
    var location = event.target.value.trim();
    AppActions.doSearch(location);
  },

  render() {
    return (
        <div className="com-search-box">
            <div className="cd-search-box-wrapper">
                <span className="cd-icon"><i className="fa fa-map-marker"></i></span>
                <input type="search" id="search" placeholder="Search . . . " onChange={this.onChange} />
            </div>
        </div>
    );
  }
});

module.exports = SearchBox;
