const db = require('../config/db');
const Article = db.customers;
const Op = db.Sequelize.Op;

//Create Article

module.exports = {
    register: (req, res) => {
        res.render("pages/register.ejs");
    },
    create:  (req, res) => {
        const customer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            published: req.body.published ? req.body.published : false
        };
        Customer.create(customer);
    },
}