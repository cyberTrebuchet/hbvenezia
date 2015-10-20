"use strict";

$(function(){
  console.log('script.js linked!');

  $('.tour').on('click', function(e){
    e.preventDefault();
    console.log(this.href);

    $('#modal-img').attr('src', this.href);
    $('#tour-modal').fadeIn(1000);
  });

  $('#tour-modal').on('click', function(e){
    $('#tour-modal').fadeOut(750);
  });

  $('.audio').on('click', function(e){
    e.preventDefault();
    console.log(this.href);
    $('audio')
      .empty()
      .append($('<source>').attr('src', this.href))
      .trigger('play');
  });
});