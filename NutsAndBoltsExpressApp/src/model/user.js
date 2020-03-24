
module.exports = {
    Address: class Address {
        constructor(obj) {
            this.addressName = obj.addressName
            this.line1 = obj.line1
            this.line2 = obj.line2
            this.State = obj.State
            this.city = obj.city
            this.pin = obj.pin
        }
    },
    User: class User {
        constructor(obj) {
            this.customerId = obj.customerId
            this.customerName = obj.customerName
            this.customerPassword = obj.customerPassword
            this.customerEmail = obj.customerEmail
            this.customerDOB = obj.customerDOB
            this.customerAddress = obj.customerAddress
            this.contactNo = obj.contactNo
            this.gender = obj.gender
        }
    }
}