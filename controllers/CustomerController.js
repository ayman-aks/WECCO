const db = require('../config/db');
const Customer = db.customers;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const _ = require('underscore');

module.exports = {
    //create a new customer
    register:  async (req, res) => {
        const customer = _.pick(req.body, ['firstName', 'lastName', 'telephone', 'email', 'password']);
        console.log(customer);
        if(await Customer.create(customer)){
            res.redirect('/login'); 
        }
        else{
            res.status(500).send("Une erreur s'est produite");
        }
        // .then(customer => {
        //     res.redirect('/login');
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).send({
        //       message:
        //       err.message || "Some error occurred while creating the Customer."
        //     });
        // });
    },

    //view login page
    login: (req, res) => {
        res.render("pages/login.ejs", {layout: false});
    },

    //authentification
    authentificate: async (req, res) => {
        const customer = await Customer.findOne({where: {email: req.body.email} })
        if(customer){
            console.log(customer);
            if(await bcrypt.compare(req.body.password, customer.password)){
                // req.session.user.id = customer.id;
                // req.session.user.email = customer.email;
                res.redirect('/');
            }
            else{
                res.status(400).send('Mot de passe invalide');
            }
        }
        else{
            res.status(400).send('Email incorrect');
        }
        // .then(customer => {
        //     if(customer){
        //         if(bcrypt.compare(req.body.password, customer.user)){
        //             res.redirect('/');
        //         }
        //     }
        // })
        // .catch();
    },
}