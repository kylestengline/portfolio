"use strict";

$(document).ready(function() {

// isn't working on page load
	// $('.loading').fadeOut('slow');
	
	// $(this).scrollTop(0);

	// Moves up divs below the image and makes site not look good.
	// 	$('#me').hide();
	// setTimeout(function() {
	// 	$('#me').fadeIn(4000);
	// }, 2000);

//  var fadeInClient = $(".client");
//  var fadeInServer = $(".server");
//    fadeInClient.hide();
//    fadeInServer.hide();

// scroll animation
    var showDiv = $("#hideThenShow");
    var pos = showDiv.position();

    $(window).scroll(function() {
      var windowPos = $(window).scrollTop();
      if (windowPos >= (pos.top - 100)) {
        showDiv.addClass("afterScroll");
      } else {
        showDiv.removeClass("afterScroll");
      }
    });
    // scroll animation end

		$('.bio').hide();
	setTimeout(function(){
    $('.bio').show();
  }, 1200)

// function to scroll to the skills area
// will not scroll until clicked
var	scrollToSkills = function(skills) {
	var skill = $("a[name=" +skills+ "]");
	$('html,body').animate({scrollTop: skill.offset().top},1500);
}
    
	$("#skills").click(function() {
		scrollToSkills('skills');
//    fadeInClient.fadeIn(4500);
//    fadeInServer.fadeIn(4500);
		// makes scroll go smooth when we return false
			return false;

	})


	// scrolls to the projects area
	var	scrollToProjects = function(projects) {
		var projects = $("a[name=" +projects+ "]");
		$('html,body').animate({scrollTop: projects.offset().top},1500);
}

	$("#my_projects").click(function() {
		scrollToProjects('projects');
			return false;
	}) 

	$("#my_projects_two").click(function() {
		scrollToProjects('projects');
			return false;
	}) 


	// Scrolls to the contact area
	var	scrollToContact = function(contact) {
		var contact = $("a[name=" +contact+"]");
		$('html,body').animate({scrollTop: contact.offset().top},1500);
}
		
	$("#contact_me").click(function() {
		scrollToContact('Contact');
			return false;
	}) 

	$("#contact").click(function() {
		scrollToContact('Contact');
			return false;
	})


// Scrolls to top of page
	var scrollToTop = function(top) {
		var top = $("a[name=" +top+ "]");
		$('html, body').animate({scrollTop: top.offset().top},1500);
	}

	$("#back_to_top").click(function() {
		scrollToTop('top');
			return false;
	})
});










