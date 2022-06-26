const { isAuth } = require("./middlewares/AuthMiddleware");

const express = require("express"),
    router = express.Router(),
    authMiddleware = require("./middlewares/AuthMiddleware"),
    messageController = require("./controllers/messageController"),
    userController = require("./controllers/userController"),
    customerController = require('./controllers/CustomerController');

router.get("/customer/message", messageController.index);
router.post("/customer/message", messageController.add);

router.get('/login', authMiddleware.isAuth, customerController.login);
router.post('/login', authMiddleware.isAuth, customerController.authentificate);
router.post('/register', authMiddleware.isAuth, customerController.register);
router.get('/logout', authMiddleware.isNotAuth, customerController.logout);

router.get("/", userController.index);
router.get("/myItems", authMiddleware.isNotAuth, customerController.getItems);
router.get("/shop", userController.shop);

module.exports = {router}


