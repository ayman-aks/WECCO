const db = require('../config/db');
const {app} = require('../config/config');
const Customer = db.customers;
const RequestTransaction = db.requestTransactions;
const Item = db.items;
const Image = db.images;
const _ = require('underscore');

module.exports = {
    sendRequest: async (req, res) => {
        const item = await Item.findOne({
            where: {id: req.params.idItem},
            include: Customer
        });
        if(item.customer.id != req.session.customer.id){
            const request = RequestTransaction.build({
                date: Date.now(),
                customerId: req.session.customer.id,
                itemId: item.id
            });
    
            request = await request.save();
            console.log(request);
            res.redirect("/sendRequest/"+item.id);
        }
        else{
            res.send("Vous pouvez pas faire une transaction avec vous-memes");
        }
    },
    getRequests: async (req, res) => {
        const requests = await RequestTransaction.findAll({
            include: [Customer, Item],
            // include: [Customer, Item, Image],            
        });

        const customer = req.session.customer;

        res.render('pages/trades.ejs',{customer, requests});

    }
}
