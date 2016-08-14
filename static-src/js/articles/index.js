'use strict';

angular
	.module('app')
	.factory('comments', require('./comments'))
	.controller('ArticleController', require('./article.controller'));