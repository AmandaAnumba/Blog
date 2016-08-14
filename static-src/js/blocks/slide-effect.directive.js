'use strict';
require('../third-party/jquery-ui.slide-effect.min.js');

var slideEffect = function($document, logger) {
    var directive = {
        restrict: 'EA',
        link: link,
    };
    return directive;

    function link(scope, element, attrs) {
        element.bind('click', slide);
        element.bind('$destroy', destroy); 
        
        function slide() {
            logger.log('slideEffect.slide(  ' + attrs.target + '  )');

            event.stopPropagation();
            event.preventDefault();

            var position = attrs.position,
                toggleEl = attrs.toggleElement,
                $targetEl = $document.find(attrs.target),
                $activeEl = $document.find(toggleEl + '.active'),
                activePosition = $activeEl.data('position');
            
            if ( !$targetEl.hasClass('active') ) {
                var direction, opposite;

                if ( activePosition < position ) {
                    direction = "left";
                    opposite = "right";
                } else {
                    direction = "right";
                    opposite = "left";
                }

                /* deactivate currently open section */
                $activeEl
                    .hide("slide", { direction: direction }, 400 )
                    .removeClass('active');

                /* activate clicked section */
                $targetEl
                    .show("slide", { direction: opposite }, 400 )
                    .addClass('active');
            }

            if (toggleEl === '.section') {
                $('li[data-toggle-element="' + toggleEl + '"].active').removeClass('active');
                element.addClass('active');
            }
        }

        function destroy() {
            logger.log('slideEffect.destroy(  ' + attrs.target + '  )');
           
            event.stopPropagation();
            event.preventDefault();

            element.off();
        }
    }
};

module.exports = slideEffect;