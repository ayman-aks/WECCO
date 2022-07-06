const _ = require('underscore');
module.exports = {
    isNotAuth: (req, res, next) => {
        if(typeof req.session.customer === 'undefined' || !req.session.customer.isAuthentified){
            res.redirect('/login');
        }
        next();
    },
    isAuth: (req, res, next) => {
        if(typeof req.session.customer !== 'undefined' && req.session.customer.isAuthentified){
            res.redirect('/');
        }
        next();
    },

    currentCustomer: (req) => {
        return  _.pick(req.session.customer, ['id', 'firstName', 'lastName', 'telephone', 'email', 'password', 'isAuthentified']);
    }
}