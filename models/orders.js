const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    statusHealth: {type: Boolean, required: true},
    statusDeath: {type: Boolean, required: true},
    message: {type: String, required: true},
}, {timestamps: true})

const Order = mongoose.model('Orders', ordersSchema)

module.exports = Order