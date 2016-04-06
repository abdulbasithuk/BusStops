/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var AppStore = require('../stores/AppStore.js');

var Map = React.createClass({
  render() {
    return (
      <div className="com-map-container">
        <div className="cd-placeholder"></div>
      </div>
    );
  }
});

module.exports = Map;
