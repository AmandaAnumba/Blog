'use strict';

var morphSearch = function($log) {
    var directive = {
        restrict: 'A',
        link: link,
    };
    return directive;


    /////////////////////

    
    function link(scope, element, attrs) {
        element.on('click', open);
        element.on('$destroy', destroy); 
        
        var $input = element.find('input');

        $('.header__search, .header').on('click', function( event ) {
            event.stopPropagation();
        });

        function open() {
            $log.log('morphSearch.open()');

            event.stopPropagation();
            event.preventDefault();

            var $links = $('.header__links');

            element.toggleClass('search-collapsed search-expanded');

            if (element.hasClass('search-collapsed')) {
                $links.fadeIn();
            } else {
                $links.fadeOut();
                // $('.header__search').animate
            }
        }

        function destroy() {
            logger.log('morphSearch.destroy()');
           
            event.stopPropagation();
            event.preventDefault();

            element.off();
        }
    }
};

module.exports = morphSearch;