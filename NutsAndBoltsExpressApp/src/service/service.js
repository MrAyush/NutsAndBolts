const customerModel = require('../model/model')

let service = {}

service.loginUser = (username, password) => {
    return customerModel.loginUser(username).then(userData => {
        if (userData.customerPassword === password) {
            return userData;
        } else {
            let err = new Error('Wrong Password!!');
            err.status = 401;
            throw err
        }
    })
}

module.exports = service