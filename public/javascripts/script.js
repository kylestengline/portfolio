"use strict";

  var hi = $("#hi");
  var kyle = $("#kyle");
  var bid_welcome = $("#bid_welcome");
  var site = $("#site");
  var welcome_div = $(".welcome_to");
  var body = $("body");
  // hide elements
  hi.hide(); 
  kyle.hide(); 
  bid_welcome.hide(); 
  site.hide();

$(document).ready(function() {

  $("div").removeClass("hidden");

		$('.bio').hide();
	setTimeout(function(){
    $('.bio').show();
  }, 7000);

  $(".container").hide();
  setTimeout(function(){
    $(".container").show();
  }, 7000);
// Text fading in and out

  //the fadein
  hi.fadeIn(1500);
  setTimeout(function(){
    kyle.fadeIn(1500);
  }, 1000);

  setTimeout(function(){
    bid_welcome.fadeIn(1500);
  }, 2000);

  setTimeout(function(){
    site.fadeIn(1500);
  }, 3000);

//////////////////////
  //words fadeout//
/////////////////////
  setTimeout(function(){
    site.fadeOut(1000);
  }, 4500);

  setTimeout(function(){
    bid_welcome.fadeOut(1000);
  }, 5000);

  setTimeout(function(){
    kyle.fadeOut(1000);
  }, 5500);

  setTimeout(function(){
    hi.fadeOut(1000);
  }, 6000)

  setTimeout(function(){
    welcome_div.fadeOut(2500);
    body.fadeIn(3500);
  }, 5000);

// function to scroll to the skills area
// will not scroll until clicked
var	scrollToSkills = function(skills) {
	var skill = $("a[name=" +skills+ "]");
	$('html,body').animate({scrollTop: skill.offset().top},1500);
}
    
	$("#skills").click(function() {
		scrollToSkills('skills');
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


