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

	/*================================
	active class
	=================================*/
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

	/*================================
	slider
	=================================*/
	$('.slider').slick({
	  dots: false,
	  arrows: true,
	  nextArrow: '<img class="arrow arrow__next" src="/wp-content/themes/ant-team-ru/assets/img/right.png">',
	  prevArrow: '<img class="arrow arrow__prev" src="/wp-content/themes/ant-team-ru/assets/img/left.png">',
	  adaptiveHeight: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1170,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
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

	// slider init mob function
	function mobileOnlySlider() {
	$('.why-we__carousel').slick({
	  arrows: false,
	  dots: false,
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
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
	slider desctop
	=======================*/ 
	$('.slides').slick({
	  dots: true,
	  arrows: true,
        nextArrow: '<img class="arrow arrow__next" src="/wp-content/themes/ant-team-ru/assets/img/right.png">',
        prevArrow: '<img class="arrow arrow__prev" src="/wp-content/themes/ant-team-ru/assets/img/left.png">',
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
		  	dots: true,
		  	arrows: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        dots: true,
	        arrows: true
	      }
	    }
	  ]
	});

	// slider init mob function

	function mobileOnlySlider_leads() {
	$('.leads-ways').slick({
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
		    dots: false,
		    arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
			dots: false,
			arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	}

	$(window).resize(function(e){
	    if(window.innerWidth < 1026) {
	        if(!$('.slider').hasClass('slick-initialized')){
	            mobileOnlySlider_leads();
	        }

	    }else{
	        if($('.slider').hasClass('slick-initialized')){
	            $('.slider').slick('unslick');
	        }
	    }
	});
	$(window).on('load resize', function() {
	  if ($(window).width() < 1026) {
	    $('.leads-way:not(.slick-initialized)').slick({

	    });
	  } else {
	    $(".leads-way.slick-initialized").slick("unslick");
	  }
	});

	//DatePicker
	$('#example-show-hide-callbacks').data('datepicker')
	$('#example-show-hide-callbacks').datepicker({
	    onShow: function(dp, animationCompleted){
	        if (!animationCompleted) {
	            log('start showing')
	        } else {
	            log('finished showing')
	        }
	    },
	    onHide: function(dp, animationCompleted){
	        if (!animationCompleted) {
	            log('start hiding')
	        } else {
	            log('finished hiding')
	        }
	    }
	})

	// Blog button search
	$(".search-filter").on("click", function() {
		$(".search").toggleClass('search_show');
	});

	$('.search-filter').click(function(){
	  if (!$('.search-filter span').data('status')) {
	  	$('.search-filter span').html('Скрыть фильтры');
	    $('.search-filter span').data('status', true);
	  }
	  else {
	  	$('.search-filter span').html('Показать фильтры');
	    $('.search-filter span').data('status', false);
	  }
	});


	// slider init mob function
	function mobileOnlySlider_more() {
	$('.more-results-slider').slick({
	  arrows: false,
	  dots: false,
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	}

	$(window).resize(function(e){
	    if(window.innerWidth < 1026) {
	        if(!$('.slider').hasClass('slick-initialized')){
	            mobileOnlySlider_more();
	        }

	    }else{
	        if($('.slider').hasClass('slick-initialized')){
	            $('.slider').slick('unslick');
	        }
	    }
	});
	$(window).on('load resize', function() {
	  if ($(window).width() < 1026) {
	    $('.more-results__item:not(.slick-initialized)').slick({

	    });
	  } else {
	    $(".more-results__item.slick-initialized").slick("unslick");
	  }
	});

	// slider init mob function
	function mobileOnlySlider_works() {
	$('.how-we-works').slick({
	  arrows: false,
	  dots: false,
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        dots: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	}

	$(window).resize(function(e){
	    if(window.innerWidth < 1026) {
	        if(!$('.slider').hasClass('slick-initialized')){
	           mobileOnlySlider_works();
	        }

	    }else{
	        if($('.slider').hasClass('slick-initialized')){
	            $('.slider').slick('unslick');
	        }
	    }
	});
	$(window).on('load resize', function() {
	  if ($(window).width() < 1026) {
	    $('.how-we-works__item:not(.slick-initialized)').slick({

	    });
	  } else {
	    $(".how-we-works__item.slick-initialized").slick("unslick");
	  }
	});
	/*=================
	Tabs
	==================*/
	$(".tab_items").not(":first").hide();
	$(".how-we-works-tabs-wrapp .tab").click(function() {
		$(".how-we-works-tabs-wrapp .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
		$(".tab_items").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab-active ");


	/*================================
	TABS active class
	=================================*/


	// init sliders
	if(window.innerWidth < 1026) {
	    mobileOnlySlider();
	}
	if(window.innerWidth < 1026) {
	    mobileOnlySlider_more();
	}
	if(window.innerWidth < 1026) {
	    mobileOnlySlider_leads();
	}
	if(window.innerWidth < 1026) {
	    mobileOnlySlider_works();
	}




}); //end document ready function

$ = jQuery;
$(document).ready(function () {
    $('.form-search').on('submit', function (e) {
        e.preventDefault();
        url = '';
        author = $('.selectAuthor option:selected').val();
        date = $('.datepicker-here').val();
        if (author != 0 && author != null) {
            url+=author;
        }
        if (date != 0 && date != null && date != '') {
            //url+='&date-'+date.replace(/\s/g, '')+'/';
            url+='?date='+date.replace(/\s/g, '');
        }
        window.location.href=url;
    });
});
