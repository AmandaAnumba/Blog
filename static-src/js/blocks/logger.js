'use strict';

var logger = function($log) {
	var service = {
		log     	: log
	};

	return service;
	
	/////////////////////

	function log(message, data) {
		if (debug) {

			if (data) {
				$log.log(message, data);
			} else {
				$log.log(message);
			}
		}
	}
};

module.exports = logger;