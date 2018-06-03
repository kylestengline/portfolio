"use strict";

$(document).ready(function() {

	// scrolls to the projects area
	var	scrollToProjects = function(projects) {
		var projects = $("a[name=" +projects+ "]");
		$('html,body').animate({scrollTop: projects.offset().top},1500);
  }

	$("#my_projects").click(function() {
		scrollToProjects('projects');
    return false;
	}) 
});
