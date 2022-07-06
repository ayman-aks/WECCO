const _ = require('underscore');
const db = require('../config/db');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const Item = db.items;
const Customer = db.customers;
const Image = db.images;
const Op = db.Sequelize.Op;
module.exports = {
    index : (req, res) => {
        const customer =  AuthMiddleware.currentCustomer(req);
        console.log(customer);
        res.render("index.ejs", {customer});
    },
    shop : async (req, res) => {
        const customer = AuthMiddleware.currentCustomer(req);
        console.log(customer);
        const items = await Item.findAll({
            where: {
                customerId: {
                    [Op.ne]: customer.id
                },
            },
            inlcude: [Customer]
            // inlcude: [Customer, Image]
        });
        console.log(items);
        res.render("shop.ejs", {customer, items});
    }
}