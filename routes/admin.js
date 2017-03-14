var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res, next) {
	res.render('layout_admin', { title: 'Booth Login', loginAction:'booth' });
});

module.exports = router;