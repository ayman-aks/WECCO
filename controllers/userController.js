module.exports = {
    index : (req, res) => {
        let customer = {
            id : req.session.customerId,
            email : req.session.customerEmail,
            firstName : req.session.customerFirstName,
            lastName : req.session.customerLastName,
            telephone : req.session.customerTelephone,
            isAuthentified : req.session.authentified,
        };
        console.log(customer);
        res.render("pages/index.ejs", {customer});
    },
    shop : (req, res) => {
        let customer = {
            id : req.session.customerId,
            email : req.session.customerEmail,
            firstName : req.session.customerFirstName,
            lastName : req.session.customerLastName,
            telephone : req.session.customerTelephone,
            isAuthentified : req.session.authentified,
        };
        res.render("pages/shop.ejs", {customer});
    }
}