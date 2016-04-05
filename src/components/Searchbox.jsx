/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var SearchBox = React.createClass({
  render() {
    return (
        <div className="com-search-box">
            <div className="cd-search-box-wrapper">
                <span className="cd-icon"><i className="fa fa-map-marker"></i></span>
                <input type="search" id="search" placeholder="Search . . . " ref="searchText" />
            </div>
        </div>
    );
  }
});

module.exports = SearchBox;
