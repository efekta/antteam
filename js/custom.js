// $(document).ready(function(){
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
// }); //end document ready function

