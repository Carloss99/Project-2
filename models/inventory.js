const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    partNum:{
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required: true
    },
    image:{
        type:String,
        required:true
    }
})

const inventory = mongoose.model('Inventory',inventorySchema)

module.exports = inventory