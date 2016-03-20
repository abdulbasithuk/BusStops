/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'React.js Starter Kit',
      layout: DefaultLayout
    };
  },
  render() {
    return (
    <h1> Bus stop locator</h1>
    );
  }
});

module.exports = HomePage;
