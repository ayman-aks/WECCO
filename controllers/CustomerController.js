const db = require('../config/db');
const {app} = require('../config/config');
const Customer = db.customers;
const Item = db.items;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const _ = require('underscore');
const session = require('express-session');

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
    register:  async (req, res) => {
        const customer = _.pick(req.body, ['firstName', 'lastName', 'telephone', 'email', 'password']);
        console.log(customer);
        customer = await Customer.create(customer);
        if(customer){
            res.redirect('/login'); 
        }
        else{
            res.status(500).send("Une erreur s'est produite");
        }
    },

    //view login page
    login: (req, res) => {
        res.render("pages/login.ejs", {layout: false});
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
                res.status(400).send('Mot de passe invalide');
            }
        }
        else{
            res.status(400).send('Email incorrect');
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
        const customer = await Customer.findOne({where: {email: req.session.customer.email}});
        const items = await customer.getItems();
        res.render("pages/test.ejs", {items, customer});
    }
}
