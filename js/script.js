$( document ).ready(function() {
    

	$('.hamburger').click(function(){
		$('body').toggleClass('nav-show')
	})


})


$('.starter-kit-slider-wrap').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


/////


$('.insta-feed-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})