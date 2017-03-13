var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/booth', function(req, res, next) {
	res.render('login', { title: 'Booth Login', loginAction:'booth' });
});
router.get('/admin', function(req, res, next) {
	res.render('login', { title: 'Admin Login', loginAction:'admin' });
});
router.post('/booth', function(req, res, next) {
	res.redirect("/transaction");
});
router.post('/admin', function(req, res, next) {
	res.redirect("/admin/dashboard");
});

module.exports = router;
