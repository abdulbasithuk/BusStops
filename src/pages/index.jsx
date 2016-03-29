/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var Searchbox = require('../components/Searchbox.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Bus Stop Locator',
      layout: DefaultLayout
    };
  },
  render() {
    return (
      <div>
        <Searchbox />
      </div>
    );
  }
});

module.exports = HomePage;
