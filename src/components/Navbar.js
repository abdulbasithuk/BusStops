require('../styles/navbar.less');
import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-top">
        <div className="container">
          <img className="cd-profile-image" src="/images/profile_image.jpg" alt="profile" />
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
