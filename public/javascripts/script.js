"use strict";

$(document).ready(function() {

	// scrolls to the projects area
  $("#my_projects").click(function() {
    var scrollToProj = $('#scripts').scrollLeft();
    $("html, body").animate({
      scrollLeft: scrollToProj.offset().left}, 1500);
    event.preventDefault();
  })
});
