const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//***********Live Chat***************//
const cors = require('cors')
const Pusher = require("pusher")

const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/searchRoutes')
const connectDB = require('./config/db')

//***********Live Chat***************//
const ChatRouter = require('./Routes/chatRoutes')

//***********Appointment Router***************//
const AppointmentRouter = require('./routes/AppointmentsRoute')

connectDB()

const app = express()

//***********Live Chat***************//
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//***********Booking Appointment***************//
// app.use((req, res, next) => {
//     const collection = req.app.locals[config.dbCollection];
//     req.collection = collection;
//     next();
// })

app.listen(process.env.port || 3000, () => { console.log('Listening on Port 3000'); })

app.use('/api/', AuthRoute, UserRoute, ChatRouter, AppointmentRouter
) 