const { isAuth } = require("./middlewares/AuthMiddleware");

const express = require("express"),
    router = express.Router(),
    authMiddleware = require("./middlewares/AuthMiddleware"),
    messageController = require("./controllers/messageController"),
    userController = require("./controllers/userController"),
    customerController = require('./controllers/CustomerController'),
    requestTransactionController = require("./controllers/RequestTransactionController"),
    itemController = require("./controllers/ItemController");

router.get("/customer/message", messageController.index);
router.post("/customer/message", messageController.add);

router.get("/add", customerController.addItems);

router.get('/login', authMiddleware.isAuth, customerController.login);
router.post('/login', authMiddleware.isAuth, customerController.authentificate);
router.get('/register', authMiddleware.isAuth, customerController.registerView);
router.post('/register', authMiddleware.isAuth, customerController.register);
router.get('/logout', authMiddleware.isNotAuth, customerController.logout);

router.get("/", userController.index);
router.get("/myItems", authMiddleware.isNotAuth, customerController.getItems);
router.get("/viewItem/:id", authMiddleware.isNotAuth, itemController.show);
router.get("/sendRequest/:idItem", authMiddleware.isNotAuth, requestTransactionController.sendRequest);
router.get("/myTrades/", authMiddleware.isNotAuth, requestTransactionController.getRequests);

router.get("/shop", authMiddleware.isNotAuth, userController.shop);

module.exports = { router }