const express = require('express');
const router = express.Router();
const setupDb = require("../model/dbSetup");
const service = require('../service/service');

router.get('/', (_, res) => {
    res.send('Hello world')
})

router.post('/login', (req, res, next) => {
    console.log('--router-loging-req.body', req.body);
    service.loginUser(req.body.username, req.body.password).then(data => {
        data.status = 'successful'
        res.json(data)
    }).catch(err => {
        next(err)
    })
})

router.get('/setupDb', (_, res, next) => {
    setupDb().then(data => {
        console.log('--setupDb-data', data);
        res.json({ 'message': 'Successfully' })
    }).catch(err => {
        next(err)
    })
})

module.exports = router