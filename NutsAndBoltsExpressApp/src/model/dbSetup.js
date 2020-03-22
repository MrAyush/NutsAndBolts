const collection = require('../utilities/connection');

const customers = [
    {
        customerId: 'ayush',
        customerName: 'Ayush Gupta',
        customerPassword: 'ayush',
        customerAddress: [{
            addressName: 'Home',
            line1: 'Random Street',
            line2: 'String Random',
            State: 'String ing',
            city: 'Random',
            pin: 12345,
            contactNo: 1234567890
        }]
    },
    {
        customerId: 'adam',
        customerName: 'Adam Millers',
        customerPassword: 'adam',
        customerAddress: [{
            addressName: 'Home',
            line1: 'Random Street',
            line2: 'String Random',
            State: 'String ing',
            city: 'Random',
            pin: 74125,
            contactNo: 4578901236
        }]
    }
]

const products = [
    {
        companyName: 'Susuki',
        companyId: 1001,
        vehicles: [
            {
                typeOfVehicle: 'Four Wheeler',
                vechicleName: 'Swift',
                parts: [
                    {
                        partType: 'Brake',
                        partNames: [{
                            name: 'Disk Brake',
                            quantity: 5,
                        },
                        {
                            name: 'Drum Brake',
                            quantity: 3,
                        }]
                    }, {
                        partType: 'Suspension',
                        partNames: [{
                            name: 'Front Suspension',
                            quantity: 2,
                        },
                        {
                            name: 'Rear Suspension',
                            quantity: 7,
                        }
                        ]
                    }
                ]
            }
        ]
    },
    {
        companyName: 'Hundai',
        companyId: 1002,
        vehicles: [
            {
                typeOfVehicle: 'Four Wheeler',
                vechicleName: 'i 10',
                parts: [
                    {
                        partType: 'Brake',
                        partNames: [{
                            name: 'Disk Brake',
                            quantity: 3,
                        },
                        {
                            name: 'Drum Brake',
                            quantity: 5,
                        }]
                    }, {
                        partType: 'Suspension',
                        partNames: [{
                            name: 'Front Suspension',
                            quantity: 7,
                        },
                        {
                            name: 'Rear Suspension',
                            quantity: 4,
                        }
                        ]
                    }
                ]
            }
        ]
    }
]

let setupDb = () => collection.getCustomerCollection().then(model => {
    return model.deleteMany({}).then(_ => {
        return model.insertMany(customers).then(_ => {
            return collection.getProductCollection().then(model => {
                return model.deleteMany({}).then(_ => {
                    return model.insertMany(products).then(data => {
                        console.log('added To data base');
                        return data
                    })
                })
            })
        })
    })
})

module.exports = setupDb
