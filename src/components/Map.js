require('../styles/map.less');
import React from 'react';
import AppStore from '../stores/AppStore.js';

class Map extends React.Component {
  render() {
    return (
      <div className="com-map-container">
        <div className="cd-placeholder"></div>
      </div>
    );
  }
}

Map.defaultProps ={
};

export default Map;
