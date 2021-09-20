const Hospital = require('../models/hospital')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashed) {

          var hospital = Hospital({
              hospitalName: req.body.hospitalName,
              hospitalEmail: req.body.hospitalEmail,
              hospitalPhone: req.body.hospitalPhone,
              hospitalLocation: req.body.hospitalLocation,
              password: req.body.password
          });
          Hospital.findOne({
              hospitalEmail: req.body.hospitalEmail
          }, function (err, hos){
              if (hos) {
                  return res.status(400).send({
                      message: 'Hospital Already Registered'
                  })
              } else {
                  hospital.save(function (err, hos){
                      if (err) {
                          res.status(403).send({
                              message: 'Failed to create'
                          })
                      } else {
                          res.status(201).send({
                              message: 'Hospital Registered Successfully'
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