const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    doctorName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    doctorEmail: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true    
    },
    doctorPhone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    doctorLocation: {
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


const Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = Doctor