const express = require('express')
const router = express.Router()

const AuthController = require('../controller/AuthController')
const HospitalController = require('../controller/HospitalController')
const DoctorController = require('../controller/DoctorController')
const authentication = require('../middleware/authentication')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.put('/resetPassword', AuthController.resetPassword)
router.put('/logout', AuthController.logout)

//*****************Hospital Authentication********************//
router.post('/registerHospital', HospitalController.register)

//*****************Hospital Authentication********************//
router.post('/registerDoctor', DoctorController.register)

module.exports = router
 