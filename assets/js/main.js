jQuery(document).ready(function($) {

	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

jQuery(document).ready(function($) {
	let images = [
	  "assets/image_mine/profile_image_cropped.jpg",
	  "assets/image_mine/casual_suit_cropped.jpg",
	  "assets/image_mine/kayak_smile_cropped.jpg"
	];
	let currentIndex = 0;
  
	$("#myFigure").click(function() {
	  currentIndex = (currentIndex + 1) % images.length; // Move to the next image, loop back to the first one after the last image
	  
	  $("#myImage").addClass("hidden"); // Start the fade out animation
	  
	  setTimeout(function() {
		$("#myImage").attr("src", images[currentIndex]);
		$("#myImage").removeClass("hidden"); // Fade in animation after image has been replaced
	  }, 400); // Delay for the fade out duration
	});
  });  
  