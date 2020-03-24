const collection = require('../utilities/connection')

let customerModel = {}

customerModel.findUser = (username) => {
    return collection.getCustomerCollection().then(model => {
        return model.findOne({ customerId: username }, { _id: 0, __v: 0 }).then(userData => {
            console.log('--model-userData', userData);
            if (userData) {
                return userData;
            } else {
                return null
            }
        })
    })
}

customerModel.findUserByemail = (email) => {
    return collection.getCustomerCollection().then(model => {
        return model.findOne({ customerEmail: email }, { _id: 0, __v: 0 }).then(userData => {
            console.log('--model-userData', userData);
            if (userData) {
                return userData;
            } else {
                return null
            }
        })
    })
}

customerModel.createCustomer = (user) => {
    return collection.getCustomerCollection().then(model => {
        return customerModel.findUser(user.customerId).then(userData => {
            if (userData) {
                return 'USER_ID_EXISTS'
            } else {
                return customerModel.findUserByemail(user.customerEmail).then(userData => {
                    if (userData) {
                        return 'USER_EXISTS'
                    } else {
                        return model.create(user).then(data => {
                            console.log('--model-createCustomer-data', data);
                            return data;
                        })
                    }
                })
            }
        })
    })
}

module.exports = customerModel