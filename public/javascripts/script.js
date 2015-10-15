"use strict";

$(function(){
  console.log('script.js linked!');

  $('#meet-me-img').click(function(e){
    $('#meet-me-img').fadeOut(3000, function(){
      $('#doorway-img').fadeIn(2000);
    });
  });
});