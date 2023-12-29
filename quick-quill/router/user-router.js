const { Router } = require('express');
const service = require('../business/QuickQuillServiceDefault.js');

const router = new Router();

router.post('/login', (req, res) => { 
    let user = req.body;
    service.getUserByEmail(user,result => {
        res.send(result.data[0]);
    });
})

router.get('/test', (req, res) => { 
    res.send('test');
})

module.exports = router;



