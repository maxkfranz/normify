'use strict';

var listeners = require('normify-listeners');

var normify = function( opts ){
  opts = opts || {};

  listeners( opts.listeners );
};

module.exports = normify;
