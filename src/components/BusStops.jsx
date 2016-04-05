/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react');

var BusStops = React.createClass({
  render() {
    return (
      <div className="com-bus-stops-container">
        <div className="cd-heading">
          <i className="fa fa-bus"></i>
          <span className="cd-title">Bus Stops</span>
        </div>
        <table className="cd-placeholder">
          <tr className="cd-item">
            <td className="cd-icon"><i className="fa fa-map-marker"></i></td>
            <td>
              <span className="cd-text"></span>
            </td>
          </tr>
          <tr className="cd-item">
            <td className="cd-icon"><i className="fa fa-map-marker"></i></td>
            <td>
              <span className="cd-text"></span>
            </td>
          </tr>
          <tr className="cd-item">
            <td className="cd-icon"><i className="fa fa-map-marker"></i></td>
            <td>
              <span className="cd-text"></span>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = BusStops;
