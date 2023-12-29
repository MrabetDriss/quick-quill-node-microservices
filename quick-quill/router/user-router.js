const { Router } = require('express');
const service = require('../business/QuickQuillServiceDefault.js');

const router = new Router();

router.post('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log('test');
    const user = req.body;
    console.log(user);
    // service.getUserByEmail(user, result => {
    //     res.send(result.data[0]);
    // });
})

router.get('/test', (req, res) => {
    res.send('test');
})

module.exports = router;



