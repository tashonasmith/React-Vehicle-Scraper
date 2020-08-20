var mongoose = require("mongoose")

var Schema = mongoose.Schema

var vehicleSchema = new Schema({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

var Vehicle = mongoose.model("Vehicle", vehicleSchema)

module.exports = Vehicle