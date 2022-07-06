const db = require('../config/db');
const {app} = require('../config/config');
const Customer = db.customers;
const Item = db.items;
const _ = require('underscore');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

module.exports = {
    show: async (req, res) => {
        const item = await Item.findOne({
            where: {id: req.params.id},
            include: Customer
        });
        const customer = AuthMiddleware.currentCustomer(req);
        console.log(item);
        res.render('product-detail.ejs', {item, customer});
    },
}