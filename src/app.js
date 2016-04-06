/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

'use strict';

var React = require('react');
var copyProperties = require('react/lib/copyProperties');
var {Router} = require('director');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to document.body.
 */
function render(page) {
  var child, props = {};
  while (page.defaultProps.layout) {
    child = page(props, child);
    copyProperties(props, page.defaultProps);
    page = page.defaultProps.layout;
  }
  React.renderComponent(page(props, child), document.body);
  document.title = props.title;
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {
  '/': () => render(require('./pages/Index.jsx'))
};

// Initialize a router
var router = new Router(routes).configure({html5history: true}).init();
