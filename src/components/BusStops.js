require('../styles/bus-stops.less');
import React from 'react';

class BusStops extends React.Component {
  render() {
    return (
      <div className="com-bus-stops-container">
        <div className="cd-heading">
          <i className="fa fa-bus"></i>
          <span className="cd-title">Bus Stops</span>
        </div>
        <table className="cd-placeholder">
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
}

BusStops.defaultProps ={
};

export default BusStops;
