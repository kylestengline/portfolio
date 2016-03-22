"use strict";

$(document).ready(function() {


// scrolls to the skills area
var	scrollToSkills = function(skills) {
	var skill = $("a[name='" +skills+"']");
	$('html,body').animate({scrollTop: skill.offset().top},'slow');
}

	$("#skills").click(function() {
		scrollToSkills('skills');
	})


	// scrolls to the projects area
	var	scrollToProjects = function(projects) {
		var projects = $("a[name='" +projects+ "']");
		$('html,body').animate({scrollTop: projects.offset().top},'slow');
}

	$("#my_projects").click(function() {
		scrollToProjects('projects');
	}) 

	$("#my_projects_two").click(function() {
		scrollToProjects('projects');
	}) 


	// Scrolls to the contact area
	var	scrollToContact = function(contact) {
		var contact = $("a[name='" +contact+"']");
		$('html,body').animate({scrollTop: contact.offset().top},'slow');
}

	$("#contact_me").click(function() {
		scrollToContact('Contact');
	}) 

	$("#contact").click(function() {
		scrollToContact('Contact');
	})


// Scrolls to top of page
	var scrollToTop = function(top) {
		var top = $("a[name='" +top+ "']");
		$('html, body').animate({scrollTop: top.offset().top},'slow');
	}

	$("#back_to_top").click(function() {
		scrollToTop('top');
	})

});










