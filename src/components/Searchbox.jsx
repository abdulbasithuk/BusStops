/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var SearchBox = React.createClass({
  render() {
    return (
      <div>
        <input type="text"/>
      </div>
    );
  }
});

module.exports = SearchBox;
