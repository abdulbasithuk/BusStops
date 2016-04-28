require('../styles/navbar.less');
import React from 'react';

let profileImage = require('../images/profile_image.jpg');

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-top">
        <div className="container">
          <img className="cd-profile-image" src={profileImage}/>
          <div className="cd-social-connect">
            <i className="fa fa-github"></i>
            <i className="fa fa-linkedin-square"></i>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
};

export default Navbar;
