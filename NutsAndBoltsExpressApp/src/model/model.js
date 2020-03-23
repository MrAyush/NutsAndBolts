const collection = require('../utilities/connection')

let customerModel = {}

customerModel.loginUser = (username) => {
    return collection.getCustomerCollection().then(model => {
        return model.findOne({ customerId: username }, { _id: 0, __v: 0}).then(userData => {
            console.log('--model-userData', userData);
            if (userData) {
                return userData;
            } else {
                let err = new Error('No user Found!!');
                err.status = 404;
                throw err
            }
        })
    })
}

module.exports = customerModel