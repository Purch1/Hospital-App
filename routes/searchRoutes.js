const express = require('express')
const router = express.Router()

const UserController = require('../controller/searchController')

router.get('/getHospitals', UserController.getHospitalsbyLocation)


module.exports = router