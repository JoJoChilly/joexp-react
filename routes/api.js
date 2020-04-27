const express = require('express');
const { Blog } = require('../bin/sequelize');
const Sequelize = require('sequelize');

const { gt, lte, ne, in: opIn } = Sequelize.Op;
const router = express.Router();

router.get('/getBlogs', (req, res) => {
    Blog.findAll({
        order: [['publishTime', 'DESC']],
        where: {
            isDeleted: {
                [ne]: 1,
            },
        },
    }).then(blogs => {
        res.send(blogs);
    });
});

// app.post('/setBlogs', function(req, res) {
//     res.send('Got a POST request');
// });

router.get('/updateBlogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.update({ isDeleted: 1 }, { where: { id: +id } })
        .then(result => res.send(result))
        .catch(err => res.send(err));
});

// app.delete('/deleteBlogs', function(req, res) {
//     res.send('Got a DELETE request at /user');
// });

module.exports = router;
