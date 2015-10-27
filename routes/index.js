'use strict';

var express = require('express');
var router = express.Router();

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
});

module.exports = router;
