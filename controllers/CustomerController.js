const db = require('../config/db');
const {app} = require('../config/config');
const Customer = db.customers;
const Item = db.items;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const _ = require('underscore');
const session = require('express-session');
const flash = require('../services/flash');
const { result } = require('underscore');

app.use(session({
    secret: 'the secret',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000*60*60*24,
    },
}));

module.exports = {
    //create a new customer
    registerView: (req, res) => {
        const customer = {};
        customer.isAuthentified = false;
        res.render('signup.ejs', {customer});
    },

    register:  (req, res) => {
        const customer = _.pick(req.body, ['firstName', 'lastName', 'telephone', 'email', 'password']);
        console.log(customer);
        Customer.create(customer).then((customer) => {
            req.session.customer = _.pick(customer, ['id', 'firstName', 'lastName', 'telephone', 'email']);
            req.session.customer.isAuthentified = true;
            res.redirect('/');
        }).catch(e => {
            console.log(e);
            res.status(500).send("Une erreur s'est produite");
        });
        // if(customer){
        //     res.redirect('/login'); 
        // }
        // else{
        //     res.status(500).send("Une erreur s'est produite");
        // }
    },

    //view login page
    login: (req, res) => {
        const customer = {};
        customer.isAuthentified = false;
        res.render("signin.ejs", {customer});
    },

    //authentification
    authentificate: async (req, res) => {
        const customer = await Customer.findOne({where: {email: req.body.email} })
        if(customer){
            // console.log(customer);
            if(await bcrypt.compare(req.body.password, customer.password)){
                req.session.customer = _.pick(customer, ['id', 'firstName', 'lastName', 'telephone', 'email']);
                req.session.customer.isAuthentified = true;
                console.log(req.session);
                res.redirect('/');
            }
            else{
                flash.add(req, 'email', req.body.email);
                flash.addError(req, 'email', "Email ou mot de passe incorrect");
                res.locals.flash = req.session.flash;
                const customer = {};
                customer.isAuthentified = false;
                res.status(400).render('signin.ejs', {customer});
            }
        }
        else{
            flash.add(req, 'email', req.body.email);
            flash.addError(req, 'email', "Email ou mot de passe incorrect");
            res.locals.flash = req.session.flash;
            const customer = {};
            customer.isAuthentified = false;
            res.status(400).render('signin.ejs', {customer});
        }
    },

    //logout
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    },

    //get auth user's items
    getItems: async (req, res) => {
        console.log(req.session.customer);
        const customer = await Customer.findOne(
            {where: {email: req.session.customer.email},
            include: Item,
        });
        console.log(customer.items);
        // const items = await customer.getItems();
        res.render("pages/test.ejs", {customer});
    },

    

}
