const express = require('express')
const Pusher = require("pusher")
const router = express.Router()


const ChatController = require('../Controller/chatController')

router.post('/liveChat', ChatController.liveChat)


module.exports = router