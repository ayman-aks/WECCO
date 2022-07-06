module.exports = (req, res, next) => {
    if(req.sessinon && req.session.flash){
        res.locals.flash = req.sessinon.flash;
        req.sessinon.flash = undefined;
    }
    req.flash = (type, content) => {
        if(req.sessinon.flash === undefined){
            req.sessinon.flash = {}
        }
        req.sessinon.flash[type] = content;
    }
    next();
}