$(document).ready(function(){
	/*========================
	 fixed header
	 =======================*/
	$(window).scroll(function() {
		if($(this).scrollTop() >= 150) {
		$('.header').addClass('header_fixed');
		// $('.nav').addClass("nav_hide");
	}
	else{
		$('.header').removeClass('header_fixed');
		// $('.nav').removeClass("nav_hide");
		}
	});

	$('.main-arrow').on('click', function(){
	    $('html, body').animate({
	        scrollTop: $("#down").offset().top
	    }, 800);
	    return false;
	  	});
}); //end document ready function

