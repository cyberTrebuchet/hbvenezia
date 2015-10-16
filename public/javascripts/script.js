"use strict";

$(function(){
  console.log('script.js linked!');

  $('#meet-me-img').hover(function(){
    $('#meet-me-img').toggleClass('swing');
  }, function(){
    $('#meet-me-img').toggleClass('swing');
  });

  $('#meet-me-img').click(function(){
    $('#meet-me-img').fadeOut(2000, function(){
      $('#doorway-img').fadeIn(2000);
    });
  });

  $('#doorway-img').click(function(){
    $('#welcome').fadeOut(1000, function(){
      $('#main').fadeIn(1000)
    })
  })
});