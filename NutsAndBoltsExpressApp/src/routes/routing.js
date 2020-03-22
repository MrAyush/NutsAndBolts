const express = require('express');
const router = express.Router();
const setupDb = require("../model/dbSetup");

router.get('/', (req, res, next) => {
    res.send('Hello world')
})

router.get('/setupDb', (req, res, next) => {
    setupDb().then(data => {
        console.log('--setupDb-data', data);
        res.json({ 'message': 'Successfully' })
    }).catch(err => {
        next(err)
    })
})

module.exports = router