$(document).ready(function(){	

/* bind load & resize */
var handler1 = function(){
	/* footer fixes */
	$(".main").css("min-height","0");
	var footH = $(".footer").height();
	var winH = $(window).height();
	$(".main-wrapper").css("margin-bottom","-"+footH+"px");
	$(".main").css("padding-bottom",footH+"px").css("min-height",winH+"px");
	/* footer fixes */
	
	/* mail fix */
	setTimeout(function(){
		$(".footer-mail").each(function(){
          var fix1 = $(this).find(".footer-mail__link").width()+6;  
		  $(this).find(".footer-mail__fix").css("margin-left",fix1+"px");
        });
	}, 400);	
	/* mail fix */
}
$(window).bind('load', handler1);
$(window).bind('resize', handler1);
/* bind load & resize */

/* clear input */		  
$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});
/* clear input */

/* lang */
var curItem1 = $(".header-lang__item_active .js-header-lang__link").text();
$(".js-header-sel").text(curItem1);
$(".js-header-lang__button").click(function(){$(".header-lang__list").stop().fadeToggle(0);})
$(".js-header-lang__link").click(function(){
	$(".header-lang__item").removeClass("header-lang__item_active");
	$(this).closest(".header-lang__item").addClass("header-lang__item_active");
	var curItem2 = $(this).text();
	$(".js-header-sel").text(curItem2);
	$(".header-lang__list").stop().fadeOut(0);
})

$(document).on('touchstart', function() {documentClick = true;});
$(document).on('touchmove', function() {documentClick = false;});
$(document).on('click touchend', function(event) {	
    if(event.type == "click") documentClick = true;
    if(documentClick){
		var target = $(event.target);
		if(target.is('.header-lang')||target.is('.header-lang *')){return}
		else{$(".header-lang__list").stop().fadeOut(0);}					
    }
 });
/* lang */	

/* slider */
/* slick */
$('.js-slider__list').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 200
});
/* slider */
});//ready eof