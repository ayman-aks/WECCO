
const express = require("express"),
    router = express.Router(),
    messageController = require("./controllers/messageController"),
    userController = require("./controllers/userController"),
    customerController = require('./controllers/CustomerController');

router.get("/customer/message", messageController.index);
router.post("/customer/message", messageController.add);

router.get('/login', customerController.login);
router.post('/login', customerController.authentificate);
router.post('/register', customerController.register);
router.get('/logout', customerController.logout);

router.get("/", userController.index);
router.get("/shop", userController.shop);

module.exports = {router}


