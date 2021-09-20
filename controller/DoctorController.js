const Hospital = require('../models/doctor')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const Doctor = require('../models/doctor')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashed) {

          var doctor = Doctor({
              doctorName: req.body.doctorName,
              doctorEmail: req.body.doctorEmail,
              doctorPhone: req.body.doctorPhone,
              doctorLocation: req.body.doctorLocation,
              password: req.body.password
          });
          Doctor.findOne({
            doctorEmail: req.body.doctorEmail
          }, function (err, hos){
              if (hos) {
                  return res.status(400).send({
                      message: 'Doctor Already Registered'
                  })
              } else {
                  doctor.save(function (err, hos){
                      if (err) {
                          res.status(403).send({
                              message: 'Failed to create'
                          })
                      } else {
                          res.status(201).send({
                              message: 'Doctor Registered Successfully'
                          })
                      }
                  })
              }
          })
    })
}


module.exports = {
    register
}