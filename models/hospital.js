const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hospitalSchema = new Schema({
    hospitalName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    hospitalEmail: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true    
    },
    hospitalPhone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    hospitalLocation: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },

    resetPassword: String, 
    expireToken: Date

                
}, {timestamps: true}


)


const Hospital = mongoose.model('Hospital', hospitalSchema)
module.exports = Hospital