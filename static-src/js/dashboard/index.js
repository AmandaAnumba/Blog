'use strict';

angular
	.module('app')
	.directive('packery', require('./packery.directive'))
	.controller('DisplayController', require('./display.controller'));