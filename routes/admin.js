const express = require('express');
// not used
const router = express.Router();
router.get('/', (req, res) => {
    res.render('/admin/index');
});
router.get('/login', (req, res) => {
    res.render('/admin/login');
});

module.exports = router;
