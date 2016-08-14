'use strict';

var ArticleController = function($log, comments) {
    var article = this;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    */
    function activate() {
        $log.log('ArticleController activated!');
        comments.init();
    }
};

module.exports = ArticleController;