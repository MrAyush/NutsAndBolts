const express = require('express');
const router = express.Router();
const setupDb = require("../model/dbSetup");
const service = require('../service/service');
const { User } = require('../model/user')
const { Address } = require('../model/user')

router.get('/', (_, res) => {
    res.send('Hello world')
})

router.post('/login', (req, res, next) => {
    console.log('--router-login-req.body', req.body);
    service.loginUser(req.body.username, req.body.password).then(data => {
        data.status = 'successful'
        res.json(data)
    }).catch(err => {
        next(err)
    })
})

router.post('/createUser', (req, res, next) => {
    console.log('--router-createUser-req.body', req.body);
    let user = new User(req.body);
    service.createUser(user).then(data => {
        data.status = 'successful'
        res.json(data)
    }).catch(err => {
        next(err)
    })
})

router.post('/addAddress', (req, res, next) => {
    console.log('--router-addAddress-req.body', req.body);
    let address = new Address(req.body);
    service.addAddressForCustomer(req.body.customerId, address).then(data => {
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