@@include('vendors/circle-progress.min.js');
@@include('vendors/owl.carousel.min.js');
@@include('main/_header-burger.js');


window.addEventListener("resize", responsWidth);

function responsWidth(){
	if(window.innerWidth <= 992){
		querSell('.header__wrap-logo').after(querSell('.contacts__networks'));
		querSell('.nav__list').appendChild(querSell('.header__wrap-btn'));
		querSell('.nav__list').appendChild(querSell('.numers'));
		querSell('.about__give-wrap').appendChild(querSell('.give'));
      querSell('.portfolio__arrow').appendChild(querSell('.box-toggles__nav'));

	}else{
		querSell('.contacts').appendChild(querSell('.numers'));
		querSell('.contacts').appendChild(querSell('.contacts__networks'));
		querSell('.header__manu').appendChild(querSell('.header__wrap-btn'));
		querSell('.header__body ').appendChild(querSell('.give'));
		querSell('.box-toggles').appendChild(querSell('.box-toggles__nav'));
	}


   if(window.innerWidth <= 576){
   	querSell('.nav__list').appendChild(querSell('.contacts__networks'));
   	querSell('.list').appendChild(querSell('.footer__networks'));
   }else{
   	querSell('.footer__inner').appendChild(querSell('.footer__networks'))
   }
}
responsWidth()

/*Jquery*/
$( document ).ready(function () {

	let element = $('.stages__box');
	let count = 0;
	$('.stages__number').last().css({"line-height": "61px"})

	$(window).scroll(function(){
		let scroll = $(window).scrollTop() + $(window).height()
      let offset = element.offset().top + element.height();
      if(scroll > offset && count == 0){
      	count = 1;
	    let progressBarOptions = {
	        startAngle: -1.55,
	        size: 66,
	        value: 0.25,

	        fill: {
	            color: '#FFB800'
	        }
	    }
	    
	    $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
	    });

	    $('#circle-2').circleProgress({
	        value : 0.35,

	    });

	    $('#circle-3').circleProgress({
	        value : 0.50,

	    });

	    $('#circle-4').circleProgress({
	        value : 0.65,

	    });

	    $('#circle-5').circleProgress({
	        value : 0.85,

	    });

	    $('#circle-6').circleProgress({
	        value : 100,
	    });

      }
	})

/*Portfolio carousel*/
	  $(".portfolio_carousel.owl-carousel").owlCarousel({
	  	items: 1,
	  	loop: true,
	  	touchDrag:true,
	  	nav: true,
	  	navElement: "span",
	  	lazyLoad: true,
	  	navContainer: ".box-toggles__nav",
	  	dotsContainer:".portfolio__mini-slider",
	  });
 

   $('.portfolio__big-slider .owl-item').not(".cloned").each(function(indexItem){
   	 let urlImg = $(this).children('img').attr("data-src");
		$('.portfolio__mini-slider > .owl-dot').each(function(indexDot){
			if(indexItem === indexDot){
			$(this).css({
				"background-image":'url('+ urlImg + ')',
				"background-position": "center center",
			   "background-size": "cover",
			   "cursor":"pointer"
			})
			}
		})

   })


   function chengPoint(){
     	$('.portfolio__mini-slider > .owl-dot').each(function(indexDot ,item){
          
            if($(item).hasClass("active") == true){

              $('.box-toggles__dots > li').each(function(indexLi){
	              	$(this).removeClass('active')
	              	if($(item).hasClass("active") && indexDot === indexLi){
	              	$(this).addClass('active')
	            }
            })
         }
      })
	}
	chengPoint()


  let owl = $(".portfolio_carousel.owl-carousel");

   owl.on('changed.owl.carousel', (e)=> {
   	chengPoint()
   })

   $('.box-toggles__dots').on('click', 'li', function(e) {
         owl.trigger('to.owl.carousel', [$(this).index(), 300]);
   });


/*Response carousel*/
	$(".response-carousel.owl-carousel").owlCarousel({
		items: 1,
		touchDrag:true,
		loop: false,
		nav: true,
		navContainer: ".response-carousel__arrow",
		dotsContainer:".response-carousel__points"

	});

});	
