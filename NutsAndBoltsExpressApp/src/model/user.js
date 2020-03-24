module.exports = class User {
    constructor(obj) {
        this.customerId = obj.customerId
        this.customerName = obj.customerName
        this.customerPassword = obj.customerPassword
        this.customerEmail = obj.customerEmail
        this.customerDOB = obj.customerDOB
        this.customerAddress = obj.customerAddress
        this.contactNo = obj.contactNo,
        this.gender = obj.gender
    }
}