var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
    res.render('index', { title: 'JoExp: 前端开发小分队' });
});

module.exports = router;
