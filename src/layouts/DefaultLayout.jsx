/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Navbar = require('../components/Navbar.jsx');

var DefaultLayout = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    breadcrumb: React.PropTypes.component
  },
  getDefaultProps() {
    return {
      title: 'Bus Stop Locator',
      description: 'Find nearby bus stops by location'
    };
  },
  render() {
    var header = this.props.breadcrumb ? (
      <div className="container">
        <h2>{this.props.title}</h2>
        {this.props.breadcrumb}
      </div>
    ) : (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Bus Stop Locator</h1>
          <p>Find nearby bus stops</p>
        </div>
      </div>
    );

    return (
      <div>
        <Navbar />
        {header}
        {this.props.children}
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
});

module.exports = DefaultLayout;
