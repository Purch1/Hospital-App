const express = require('express')
const router = express.Router()

const AppointmentController = require('../controller/AppointmentController')


router.get('/getAppointments', AppointmentController.getAppointments )
router.post('/bookAppointments', AppointmentController.bookAppointments )
router.delete('/deleteAppointments/:id', AppointmentController.deleteAppointments )


module.exports = router