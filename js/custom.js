/*global $, alert, console*/
$(function () {
    'use strict';
    //smooth scroll to div
    $('.links li a').click(function () {
    	$('html,body').animate({
      	  scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
		console.log('#' + $(this).data('value'));
	});
    
 //links add active class
    $('.links li a').click(function () {    	 
		$(this).parent().addClass('active').siblings()
    		.removeClass('active');
    });

    //nicescroll
    $('html').niceScroll({
        cursorcolor: '#d9ceef'
    });
   
});