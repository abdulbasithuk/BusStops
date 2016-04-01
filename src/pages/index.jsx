/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');
var SearchBox = require('../components/SearchBox.jsx');
var Map = require('../components/Map.jsx');
var BusStops = require('../components/BusStops.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'Bus Stop Locator',
      layout: DefaultLayout
    };
  },
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div class="col-md-6 col-md-offset-3">
            <SearchBox />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-sm-6">
            <BusStops/>
          </div>
          <div className="col-xs-4 col-sm-6">
            <Map/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
