/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
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
});

module.exports = Navbar;
