const _ = require('underscore');
module.exports = {
    index : (req, res) => {
        const customer = _.pick(req.session.customer, ['firstName', 'lastName', 'telephone', 'email', 'password', 'isAuthentified']);
        console.log(customer);
        res.render("pages/index.ejs", {customer});
    },
    shop : (req, res) => {
        const customer = _.pick(req.session.customer, ['firstName', 'lastName', 'telephone', 'email', 'password', 'isAuthentified']);
        console.log(customer);
        res.render("pages/shop.ejs", {customer});
    }
}