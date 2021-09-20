const express = require('express')
const router = express.Router();
const ObjectID = require('mongodb').ObjectID

const getAppointments =  (req, res, next) => {
    req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));
}

const bookAppointments = (req, res, next) => {
    const { appointmentDate, name, email } = req.body; 
    if(!appointmentDate || !name || !email) {
        return res.status(400).json({
            message: 'Appointment date, name and email are required',   
        });
    }

    const payload = { appointmentDate, name, email };
    req.collection.insertOne(payload)
        .then(result => res.json(result))
        .catch(error => res.send(error));
}

const deleteAppointments =  (req, res, next) => {
    const { id } = req.params;
    const _id = ObjectID(id);

    req.collection.deleteOne({ _id })
        .then(result => res.json(result))
        .catch(error => res.send(error));

}


module.exports = {
    getAppointments, bookAppointments, deleteAppointments
}