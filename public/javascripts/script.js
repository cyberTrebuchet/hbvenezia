"use strict";

$(function(){
  console.log('script.js linked!');

  $('a').not($('.top')).attr('target', '_blank');

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

    console.log(this.href);
    console.log($('source')[0], $('source')[1]);

    if ($('source')[0]) {
      if ($('source')[0].src === this.href) {
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
        .append($('<source>').attr('src', this.href.slice(0, -3) + 'mp3'))
        .prependTo($('body'))
        .trigger('play');
      }
    } else {
      $('audio')
      .append($('<source>').attr('src', this.href))
      .append($('<source>').attr('src', this.href.slice(0, -3) + 'mp3'))
      .trigger('play');
    }
  });
});