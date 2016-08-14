'use strict';

angular
	.module('app')
	.service('Authentication', require('./auth.service'))
	.controller('LoginController', require('./login.controller'))
	.controller('ResetController', require('./password_reset.controller'));