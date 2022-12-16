jQuery(function($) {
  "use strict";  	  
 
 /* ----------------------------------------------------------- */
   /*  Header Fixed on Scroll
   /* ----------------------------------------------------------- */
$(window).on('scroll', function(){

        if( $(window).scrollTop()>40 ){

        $('.navbar').addClass('main-nav-fixed animated fadeInDown');
        } 
        else {

        $('.navbar').removeClass('main-nav-fixed animated fadeInDown');

        }

    }); 
 /* -------------- End -------------------------------*/ 	
 
/* ----------------------------------------------------------- */
  /*  Scroll Top
  /* ----------------------------------------------------------- */	
$(window).scroll(function(){
		// scroll to top visible function
		if ($(window).scrollTop() > $(window).height()/2){
			$('.scroll_to_top').fadeIn();
		}
		else {
			$('.scroll_to_top').fadeOut();
		}
	});
	$('.scroll_to_top').click(function(){
		$('html, body').animate({scrollTop: 0},800);
});
/* -------------- End -------------------------------*/	 

});