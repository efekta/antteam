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


	$('.slider').slick({
	  dots: false,
	  arrows: true,
	  nextArrow: '<img class="arrow arrow__next" src="img/right.png">',
	  prevArrow: '<img class="arrow arrow__prev" src="img/left.png">',
	  adaptiveHeight: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        infinite: true,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        arrows: true
	      }
	    }
	  ]
	});
}); //end document ready function

