'use strict';

var packery = function() {
    var directive = {
        restrict: 'A',
        link: link,
    };
    return directive;


    /////////////////////

    
    function link(scope, element, attrs) {
        var options = {
                itemSelector: '.article',
                horizontal: true,
                gutter: 6
            },
            $grid = new Packery('#articlesList', options);

        imagesLoaded($grid, function() {
            setTimeout( function() {
                $grid.layout();
                $('#packery').addClass('initalized');
            }, 500);
        });
    }
};

module.exports = packery;