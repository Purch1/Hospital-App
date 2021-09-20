const Hospital = require('../models/hospital')

const getHospitalsbyLocation = (req, res, next) => {
    Hospital.find({
        hospitalLocation: req.body.userLocation
    },  function (err, result) {
        if (result) {
            return res.status(200).send({
                message: 'success',
                data: result
            })
        } else if (!result || result < 1 || result == []) {
            res.status(404).send({
                message: 'No Hospitals in your area'
            })
        } else {
            res.status(503).send({
                message: 'An error occurred'
            })
        }
    }
   
    )
}

module.exports = {
    getHospitalsbyLocation
}