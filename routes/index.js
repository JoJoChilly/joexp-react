const express = require('express');

const router = express.Router();
/* GET home page. */
router.get('/*', (req, res) => {
    res.render('index', {
        env: req.app.get('env'),
        title: 'JoExp: 前端开发小分队'
    });
});

module.exports = router;
