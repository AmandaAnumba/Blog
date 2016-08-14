'use strict';

angular
	.module('app')
	.factory('logger', require('./logger'))
	.factory('loader', require('./loader'))
	.directive('slideEffect', require('./slide-effect.directive'))
	.directive('morphSearch', require('./morph_search.directive'))
	.directive('dropdown', require('./dropdown.directive'))
	.controller('SearchController', require('./search.controller'));