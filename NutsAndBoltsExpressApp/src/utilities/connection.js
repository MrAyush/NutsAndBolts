const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
Mongoose.set('useUnifiedTopology', true);
const url = "mongodb://localhost:27017/NutsAndBolts_DB";

const customerSchema = Schema({
    customerId: { type: String, unique: true },
    customerName: String,
    customerPassword: String,
    customerAddress: {
        type: [{
            addressName: String,
            line1: String,
            line2: String,
            State: String,
            city: String,
            pin: Number
        }],
        default: []
    },
    contactNo: Number,
    gender: {type: String, enum: ['Male', 'Female', 'Other']}
}, { collection: "Customer" });

const productSchema = Schema({
    companyName: String,
    companyId: Number,
    vehicles: {
        type: [{
            typeOfVehicle: { type: String, enum: ['Two Wheeler', 'Four Wheeler'] },
            vechicleName: String,
            parts: {
                type: [{
                    partType: String,
                    partNames: {
                        type:[{
                            name: String,
                            quantity: Number,
                        }]
                    }
                }],
                default: []
            }
        }],
        default: []
    }
}, { collection: "Product" })

const serviceSchema = Schema({

}, { collection: "Service" })

let collection = {};

collection.getCustomerCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Customer', customerSchema)
    }).catch((error) => {
        console.log('--getCustomerCollection-error', error);
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getProductCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Product', productSchema)
    }).catch((error) => {
        console.log('--getCustomerCollection-error', error);
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection