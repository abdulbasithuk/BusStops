require('../styles/search-box.less');
import React from 'react';
import AppActions from '../actions/AppActions.js';

class SearchBox extends React.Component {

  onChange(event){
    var location = event.target.value.trim();
    AppActions.doSearch(location);
  }

  render() {
    return (
        <div className="com-search-box">
            <div className="cd-search-box-wrapper">
                <span className="cd-icon"><i className="fa fa-map-marker"></i></span>
                <input type="search" id="search" placeholder="Search . . . " onChange={this.onChange} />
            </div>
        </div>
    );
  }
}

SearchBox.defaultProps ={
};

export default SearchBox;
