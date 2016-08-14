'use strict';

var DisplayController = function($log, $http) {
    var vm = this;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    */
    function activate() {
        $log.log('DisplayController activated!');
    }
};

module.exports = DisplayController;