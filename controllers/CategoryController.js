const db = require('../config/db');
const {app} = require('../config/config');
const Category = db.categories;
const _ = require('underscore');

module.exports = {
    add: (req, res) => {
        const category = _.pick(req.body, ['libelle']);
        category = await Category.create(category);
        if(category){
        }
    }
}