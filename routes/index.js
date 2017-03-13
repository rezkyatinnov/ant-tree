var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AntTree' });
});
router.get('/monitor', function(req, res, next) {
  res.render('monitor', { title: 'AntTree Monitor' });
});



module.exports = router;
