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


(function($, document) {
	// get tallest tab__content element
	let height = -1;

	  $('.tab__content').each(function() {
		  height = height > $(this).outerHeight() ? height : $(this).outerHeight();
	   $(this).css('position', 'absolute');
	  });
	
	// set height of tabs + top offset
	  $('[data-tabs]').css('min-height', height + 40 + 'px');
 
}(jQuery, document));


$(document).ready(function() {
    adjustWorkSection();

    $('input[type="radio"][name="tabgroup"]').on('change', adjustWorkSection);
    
    function adjustWorkSection() {
        var activeTabContent = $('input[type="radio"][name="tabgroup"]:checked').parent().find('.tab__content');
        var activeTabHeight = activeTabContent.outerHeight();
        var paddingTop = activeTabHeight + 30; // 30px additional margin, adjust as needed
        $('.ds-work-section').css('paddingTop', paddingTop + 'px');
    }

    // Optional: Adjust the padding when the window is resized, in case of responsive design
    $(window).on('resize', adjustWorkSection);
});
