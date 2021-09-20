const Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1267663",
  key: "09538ec062557d11304f",
  secret: "4f940d21c03a1268d605",
  cluster: "mt1",
  useTLS: true
})

const liveChat = (req, res) => {
    pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });
    res.json([]);
}

module.exports = {
    liveChat
}