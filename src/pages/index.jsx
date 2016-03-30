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
      <div className="text-center">
        <div className="row">
          <div class="col-md-6 col-md-offset-3">
            <Searchbox />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-sm-6">
            Nearby bus stops info
          </div>
          <div className="col-xs-4 col-sm-6">
            Google map with pointers
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
