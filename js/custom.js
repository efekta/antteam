$(document).ready(function(){
	/*========================
	 fixed header
	 =======================*/
	$(window).scroll(function() {
		if($(this).scrollTop()) {
		$('.header').addClass('header_fixed');
	}
	else{
		$('.header').removeClass('header_fixed');
		}
	});
	/*================================
	плавный скролл до якоря jquery
	=================================*/
	$('.main-arrow').on('click', function(){
	    $('html, body').animate({
	        scrollTop: $("#down").offset().top
	    }, 800);
	    return false;
	  });

	$("body").on('click', '[href*="#"]', function(e){
		  var fixed_offset = 100;
		  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		  e.preventDefault();
	});

	/*========================
	mob nav
	=========================*/
	$(".menu-gamburger").on("click", function() {
		$(".page-nav-mob").toggleClass('page-nav-mob_show');
	});
	$("#nav-icon").click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass('overlay');
	});
	/*========================
	end mob nav
	=========================*/
	/*================================
	fixed aside
	=================================*/
	$(window).scroll(function() {
		if($(this).scrollTop() > $("div.article-page_bg").height()) {
			$('.aside').addClass('aside_fixed');
		}
		else{
			$('.aside').removeClass('aside_fixed');
		}
	});

	// $(function() {
	//     var sbula = $('.aside-nav-list li a');
	    
	//     sbula.click(function() {
	//         sbula.removeClass('active').not(sbula).add(this).toggleClass('active');
	//     });
	// });
	// $(function () {  
	//     $('.aside-nav-list li a').each(function () { 
	//         var location = window.location.href; 
	//         var link = this.href;  
	//         if(location == link) { 
	//             $(this).addClass('active');
	//         }
	//     });
	// });
    $('.aside-nav-list li a').each(function(i) {
    	// e.preventDefault();
        if (this.href == document.location.href) {
        	// e.preventDefault();
            // Присваиваем класс активному пункту меню li, а не ссылке.
            // ul.nav li.nav_item.nav_active a.nav_link
            $(this).parent('.aside-nav-list li').addClass('active');
            // e.preventDefault();
        }
    });
	// $('.aside-nav-list li a').each(function() {
	//     if($(this).attr('href')==window.location.pathname){
	//     	$(this).parent('li').addClass('active');
	//   	}
	// });
	// $('.aside-nav-list__link').on('click', function() {
	// 	$('.aside-nav-list__item').removeClass('active')
	// 	$('.aside-nav-list__item').addClass('active')
	// });
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


	function mobileOnlySlider() {
	    $(document).ready(function(){
	        $('.why-we__carousel').slick({
				  // centerMode: true,
				  // centerPadding: '20px',
				  slidesToShow: 4,
				  responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        arrows: false,
				        // centerMode: true,
				        // centerPadding: '40px',
				        slidesToShow: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        arrows: false,
				        // centerMode: true,
				        // centerPadding: '40px',
				        slidesToShow: 1.5
				      }
				    }
				  ]
	        });
	    });
	}
	if(window.innerWidth < 1026) {
	    mobileOnlySlider();
	}
	$(window).resize(function(e){
	    if(window.innerWidth < 1026) {
	        if(!$('.slider').hasClass('slick-initialized')){
	            mobileOnlySlider();
	        }

	    }else{
	        if($('.slider').hasClass('slick-initialized')){
	            $('.slider').slick('unslick');
	        }
	    }
	});
	$(window).on('load resize', function() {
	  if ($(window).width() < 1026) {
	    $('.why-we__carousel__item:not(.slick-initialized)').slick({
	      dots: false,
	      arrows: false,
	      infinite: true,
	      speed: 100,
	      slidesToShow: 1
	    });
	  } else {
	    $(".why-we__carousel__item.slick-initialized").slick("unslick");
	  }
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

	$('.slides').slick({
	  dots: true,
	  arrows: false,
	  adaptiveHeight: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        dots: true
	      }
	    }
	  ]
	});



}); //end document ready function


