'use strict';

var angular = require('angular');
window.imagesLoaded = require('imagesloaded');
window.Packery = require('packery');

angular 
    .module('app', []);

require('./core');
require('./blocks');
require('./dashboard');
require('./authentication');