var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/booth', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
