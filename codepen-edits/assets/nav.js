// Function for fading in and out the nav bar
$(function() {
     $(window).scroll(function() {
          var $this = $(window);

          if($this.scrollTop() > 100) {
               $('#main-nav').addClass('fixed-nav');
          } else {
               $('#main-nav').removeClass('fixed-nav');
          }
     });
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

$(function() {
	smoothScroll(300);
});

// When the menu button is click then open the nav menu
$('#menu-button').click(function() {
     $(this).toggleClass('change');
     $('.nav-links').toggleClass('nav-open');
});

/* If the window is resized and the class change has already been
applied, then toggle it to avoid an issue with the menu button disappearing */
$(window).resize(function() {
     if ($(window).width() > 768) {
          console.log($(window).width());
          if ($('.nav-links').hasClass('nav-open')) {
               $('#menu-button').toggleClass('change');
               $('.nav-links').toggleClass('nav-open');
          }
     }
});

