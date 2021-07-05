const express = require('express');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const router = express.Router();

router.post('/save', async (req, res) => {
    const { body } = req;

    const params = new URLSearchParams();


    Object.entries(body).forEach(([key, value]) => {
        if (key === 'answer_survey') {
            params.append(key, JSON.stringify(value));
        } else {
            params.append(key, value);
        }
    });
    let result;
    try {
        const getResult = await fetch('https://wj.qq.com/sur/collect_answer', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                accept: 'application/json, text/javascript, */*; q=0.01',
                referer: 'https://wj.qq.com/s2/8685000/a9e6/',
                'X-Forwarded-For': req.header('x-forwarded-for'),
                'User-Agent': req.header('User-Agent')
            },
            body: params,
            method: 'POST',
        });
        result = await getResult.json();
    } catch (e) {
        console.log(e);
    }
    res.send(result);
});


router.get('/*', (req, res) => {
    res.render('merryme', {
        env: req.app.get('env'),
    });
});


module.exports = router;
