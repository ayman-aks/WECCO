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
}