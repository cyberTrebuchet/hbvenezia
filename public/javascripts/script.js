"use strict";

$(function(){
  console.log('script.js linked!');

  $('#meet-me-img').hover(function(e){
    $('#meet-me-img').toggleClass('swing');
  }, function(e){
    $('#meet-me-img').toggleClass('swing');
  });

  $('#meet-me-img').click(function(){
    $('#meet-me-img').fadeOut(2000, function(){
      $('#doorway-img').fadeIn(2000);
    });
  });
});