const db = require('../config/db');
const { app } = require('../config/config');
const Customer = db.customers;
const Item = db.items;
const Category = db.categories;
const _ = require('underscore');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const flash = require('../services/flash');

module.exports = {
<<<<<<< HEAD
    create : async (req, res) => {
        const item = _.pick(req.body, ['intitule', 'prix', 'author', 'description', 'etat']);
        const category = await Category.findOne({where: {id: req.body.category}})
        if(category){
            item.categoryId = category.id;
            Item.create(item)
            .then(item => {
                flash.add(req, 'message', "Article ajouté avec succés");
                res.render('add_item.ejs')
            })
            .catch( error => {

            });
        }
    },
    show: async (req, res) => {
=======
    show: async(req, res) => {
>>>>>>> c8ae824566cdabb0f6b3df68178854de7de84593
        const item = await Item.findOne({
            where: { id: req.params.id },
            include: Customer
        });
        const customer = AuthMiddleware.currentCustomer(req);
        console.log(item);
        res.render('product-detail.ejs', { item, customer });
    },

    // Add items
    addItems: (req, res) => {
        const customer = AuthMiddleware.currentCustomer(req);
        res.render('add_items', { customer });
    },
}