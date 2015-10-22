"use strict";

$(function(){
  console.log('script.js linked!');

  $('.tour').on('click', function(e){
    e.preventDefault();
    $('#modal-img').attr('src', this.href);
    $('#tour-modal').fadeIn(1000);
  });

  $('#tour-modal').on('click', function(e){
    $('#tour-modal').fadeOut(750);
  });

  $('.audio').on('click', function(e){
    e.preventDefault();

    console.log(e.target.href);
    console.log($('source')[0]);

    if ($('source')[0]) {
      if ($('source')[0].src === e.target.href) {
        console.log($('audio')[0].paused)
        if ($('audio')[0].paused) {
          $('audio').trigger('play');
        } else {
          $('audio').trigger('pause');
        }
      } else {
        $('audio')
        .trigger('pause')
        .remove();
        $('<audio>')
        .append($('<source>').attr('src', this.href))
        .prependTo($('body'))
        .trigger('play');
      }
    } else {
      $('audio')
      .append($('<source>').attr('src', this.href))
      .trigger('play');
    }
  });
});