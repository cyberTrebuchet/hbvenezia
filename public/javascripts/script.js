"use strict";

$(function(){
  console.log('script.js linked!');

  $('.tour').on('click', function(e){
    e.preventDefault();
    console.log(this.href);
  });
});