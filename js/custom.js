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
	/*================================
		плавный скролл до якоря jquery
	=================================*/
	$("body").on('click', '[href*="#"]', function(e){
		  var fixed_offset = 100;
		  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		  e.preventDefault();
		});

	/*================================
	плавный скролл до якоря aside
	=================================*/
	$(window).scroll(function() {
		if($(this).scrollTop() > $("div.article-page_bg").height()) {
			$('.aside').addClass('aside_fixed');
		}
		else{
			$('.aside').removeClass('aside_fixed');
		}
	});


	/*================================
	slider
	=================================*/
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
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	/*========================
	select
	 =======================*/ 
	 $(".property-value").on('click', function() {
	 	$(".jq-selectbox__trigger-arrow").toggleClass("jq-selectbox__trigger-arrow_active");
	 });

	$(function() {
	  if($('select').length > 0) {
	  	$('select').styler();
	  }

	});
	/*========================
	end select
	 =======================*/ 

}); //end document ready function


