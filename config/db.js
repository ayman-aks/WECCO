
const images = require('../models/Image');

const path = require('path');
const Sequelize = require("sequelize");
const sequelize = new Sequelize('wecco', 'wecco', 'passer', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});
const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('../models/Customer')(sequelize, Sequelize);
db.categories = require('../models/Category')(sequelize, Sequelize);
db.discussions = require('../models/Discussion')(sequelize, Sequelize);
db.items = require('../models/Item')(sequelize, Sequelize);
db.images = require('../models/Image')(sequelize, Sequelize);
db.messages = require('../models/Message')(sequelize, Sequelize);
db.transactions = require('../models/Transaction')(sequelize, Sequelize);
db.requestTransactions = require('../models/RequestTransaction')(sequelize, Sequelize);

// 1:n
db.items.hasMany(db.images);
db.images.belongsTo(db.items);

db.categories.hasMany(db.items);
db.items.belongsTo(db.categories);

db.customers.hasMany(db.items);
db.items.belongsTo(db.customers);

db.discussions.hasMany(db.messages);
db.messages.belongsTo(db.discussions);

db.customers.hasMany(db.messages);
db.messages.belongsTo(db.customers);

db.customers.hasMany(db.discussions);
db.discussions.belongsTo(db.customers)




// 1:1
db.items.hasOne(db.transactions);
db.transactions.belongsTo(db.items);

db.items.hasOne(db.discussions);
db.discussions.belongsTo(db.items);

db.customers.hasOne(db.requestTransactions);
db.requestTransactions.belongsTo(db.customers);

db.items.hasOne(db.requestTransactions);
db.requestTransactions.belongsTo(db.items);


module.exports = db;