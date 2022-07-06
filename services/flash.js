module.exports = {
    add : (req, type, content) => {
        if(req.session.flash === undefined){
            req.session.flash = {}
        }
        req.session.flash[type] = content;
    },
    addError : (req, type, content) => {
        if(req.session.flash === undefined){
            req.session.flash = {};
            req.session.flash.errors = {};
        }
        else if (req.session.flash.errors === undefined) {
            req.session.flash.errors = {};
        }
        req.session.flash.errors[type] = content;
    }
    
}