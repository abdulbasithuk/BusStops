//require('bootstrap');
require('../styles/app.less');

import React from 'react';
import Navbar from './Navbar.js';
import SearchBox from './Searchbox.js';
import Map from './Map.js';
import BusStops from './BusStops.js';

class HomePage extends React.Component {
  render() {
    return (
    <div>
      <Navbar />
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Bus Stop Locator</h1>
          <p>Find nearby bus stops</p>
        </div>
      </div>
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
      <div className="navbar-footer">
        <div className="container">
          <p className="text-muted">
            <span>© Abdul Thajudeen</span>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

HomePage.defaultProps = {
};

export default HomePage;
