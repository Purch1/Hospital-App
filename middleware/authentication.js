const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {

        const token = req.headers.authorization.spilt(' ')[1]
        const decode = jwt.verify(token, 'ks(0kfdj')

        req.user = decode
        next()
    }
    catch(error) {
        res.json({
            message: 'Authentication Failed!'
        })
    }
}

module.exports = authenticate 