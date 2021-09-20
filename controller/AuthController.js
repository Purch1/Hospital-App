const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
            message: 'User Added Successfully!'
            })
        })
        .catch (error => {
            res.json({
            message: 'User already exist!'
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    
    User.findOne({$or: [{email:username}, {phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'ks(0kfdj', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!', 
                        token
                    })
                }else{
                    res.json({
                        message: 'Password does matched!'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found!'
            })
        }
    })
}

const resetPassword = (req, res, next) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=> {
            if(!user) {
                return res.status(422).json({error:"User don't exists with that email"})
            }
            user.resetPassword = token
            user.expiresToken = Date.now() + 3600000
            user.save().then((result) =>{
                transporter.sendMail({
                    to:user.email,
                from:"no-replay@insta.com",
                subject:"password reset",
                html:`
                <p>You requested for password rest</p> 
                <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                ` 
                })
            })
            res.json({message:"check your email"})
        })
    })
}

const logout = (req, res, next) => {
   res.token(jwt.sign({name: user.name}, {expiresIn: '3s'}))
   res.redirect('/login')


    
  
}

module.exports = {
    register, login, resetPassword, logout
}