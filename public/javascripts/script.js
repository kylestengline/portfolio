"use strict";

var hi = $("#hi");
var kyle = $("#kyle");
var bid_welcome = $("#bid_welcome");
var dev = $("#developer");
var welcome_div = $(".welcome_to");
var body = $("body");
// hide elements
hi.hide(); 
kyle.hide(); 
bid_welcome.hide(); 
dev.hide();

$(document).ready(function() {

  $("div").removeClass("hidden");

  $('.bio').hide();
	setTimeout(function(){
    $('.bio').fadeIn(2000);
  }, 7500);

  $(".container").hide();
  setTimeout(function(){
    $(".container").show();
  }, 7500);

// Text fading in and out
  //words fadein//
  var fadeElIn = [hi, kyle, dev, bid_welcome]
  fadeElIn.forEach(function(fade, time){
    setTimeout(function(){
      fade.fadeIn(1500);
    }, time * 1000);
  });
  
  //words fadeout//
  var revEl = fadeElIn.reverse();
  revEl.forEach(function(elem, time){
    setTimeout(function(){
      setTimeout(function(){
        elem.fadeOut(1000);
      }, time * 600);
    }, 4800);
  }) 

  ////fade out welcome_div and fade in body////
  setTimeout(function(){
    welcome_div.fadeOut(2400);
    body.fadeIn(2900);
  }, 5400);

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

