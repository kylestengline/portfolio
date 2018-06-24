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

  //fade out welcome_div and fade in body//
  setTimeout(function(){
    welcome_div.fadeOut(2400);
    body.fadeIn(2900);
  }, 5400);

  //Open projects dropdown and scroll to them
  $("#my_projects").click(function(){
    $(".dropdown-content").toggleClass("show");
    setTimeout(function(){
      $("html, body").animate({ scrollTop: document.body.scrollHeight} , 1000);
    }, 100)
  })
});
