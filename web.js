
const express = require("express"),
    router = express.Router(),
    messageController = require("./controllers/messageController"),
    userController = require("./controllers/userController"),
    customerController = require('./controllers/CustomerController');

router.get("/customer/message", messageController.index);
router.post("/customer/message", messageController.add);
router.get('/register', customerController.register);

router.get("/", userController.index);

module.exports = {router}


