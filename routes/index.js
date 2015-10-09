var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var titles = {
    title: 'Harry\'s Bar in Venice',
    desc: 'Cipriani Bar & Restaurant Venezia'
  }
  res.render('index', titles);
});

module.exports = router;
