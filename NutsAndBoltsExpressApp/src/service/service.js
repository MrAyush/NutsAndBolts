const customerModel = require('../model/model')

let service = {}

service.loginUser = (username, password) => {
    return customerModel.findUser(username).then(userData => {
        if (!userData) {
            let err = new Error('No user Found!!');
            err.status = 404;
            throw err
        }
        else if (userData.customerPassword === password) {
            return userData;
        } else {
            let err = new Error('Wrong Password!!');
            err.status = 401;
            throw err
        }
    })
}

service.createUser = (user) => {
    return customerModel.createCustomer(user).then(data => {
        if (data === 'USER_ID_EXISTS') {
            let err = new Error('User Id taken');
            err.status = 401;
            throw err
        } else if (data === 'USER_EXISTS') {
            let err = new Error('User Already exists');
            err.status = 401;
            throw err
        } else {
            return data
        }
    })
}

module.exports = service