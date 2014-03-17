/* jshint undef: true, unused: true */
/* global skrollr */
$(document).ready(function() {
    'use strict';

    //parallax
    skrollr.init({
        edgeStrategy: 'set',
        easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1 - p;
            }
        },
        smoothScrolling: true,
        forceHeight: false
    });

});

$(window).resize(function() {
    'use strict';
    $('#page-header:not(.small)').css({'height': ($(window).height()-40) + 'px'});
});


$(window).load(function() {
    'use strict';

    //intro height
    $('#page-header:not(.small)').css({'height': ($(window).height()-40)+'px'});

    //preloader
    $(window).scrollTop(0);
    $('#page-preloader').fadeOut('slow');

    //tooltip and popover trigger
    $('[data-thumb=tooltip]').tooltip();
    $('[data-thumb=popover]').popover();

    //if link points to nowhere (aka #) then don't go to top of page
    $('a[href="#"]').click(function() {
        return false;
    });

});