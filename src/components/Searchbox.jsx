/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var SearchBox = React.createClass({
  render() {
    return (
      <div className="com-search-box-container">
        <label for="search-input">
          <i className="fa fa-search"></i>
        </label>
        <input className="cd-input-text" id="search-input" type="text" placeholder="Enter Location"/>
      </div>
    );
  }
});

module.exports = SearchBox;
