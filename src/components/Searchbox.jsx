/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var SearchBox = React.createClass({
  render() {
    return (
      <div className="mod-search-box-container">
        <input type="text"/>
      </div>
    );
  }
});

module.exports = SearchBox;
