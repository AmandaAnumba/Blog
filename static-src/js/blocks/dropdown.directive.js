require('../third-party/jquery.menu-aim');

'use strict';

var dropdown = function($log) {
    var directive = {
        restrict: 'A',
        link: link,
    };
    return directive;


    /////////////////////

    
    function link(scope, element, attrs) {
        /* first, init the dropdown */
        UIkit.dropdown(element, {
            mode:'click', 
            justify:'.header', 
            remaintime: 200
        });

        /* init jquery menu aim */
        $(".uk-nav-dropdown").menuAim({
            activate: handleActivateSubmenu,
            deactivate: handleDeativateSubmenu
        });
        
        function handleActivateSubmenu (li) {
            var $li = $(li),
                $submenu = $($li.data('toggle'));

            $li.addClass('active');
            $submenu.addClass("open");
        }

        function handleDeativateSubmenu (li) {
            var $li = $(li),
                $submenu = $($li.data('toggle'));

            $li.removeClass('active');
            $submenu.removeClass("open");
        }
    }
};

module.exports = dropdown;