'use strict';

var express = require('express');
var router  = express.Router();
var fs      = require('fs');

/* GET home page. */
router
.get('/', function(req, res, next) {
  var titles = {
    title: 'Harry\'s Bar in Venice',
    desc: 'Cipriani Bar & Restaurant Venezia'
  }
  res.render('index', titles);
})
.get('/reflections', function(req, res, next) {
  var titles = {
    title: 'Reflections on Harry\'s Bar',
    desc: 'Cipriani Bar & Restaurant Venezia'
  }
  res.render('reflections', titles);
})
.get('/privacy', function(req, res, next){
  var titles = {
    title: 'Privacy Policy',
    desc: 'Harry\'s Bar Venezia unofficial site'
  }
  res.render('privacy', titles);
})
.get('/sitemap.xml', function(req, res, next){
  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile('/sitemap.xml', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', '/public/sitemap.xml');
    }
  });
});

module.exports = router;
