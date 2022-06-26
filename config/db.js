// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'wecco',
//   password : 'passer',
//   database : 'express'
// });

// connection.connect();

// module.exports=connection;
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
const db = {

    // Customer: require(path.join(__dirname, "../models/Customer"))(sequelize, Sequelize),
    // Category: require(path.join(__dirname, "../models/Category"))(sequelize, Sequelize),
    // Discussion: require(path.join(__dirname, "../models/Discussion"))(sequelize, Sequelize),
    // Image: require(path.join(__dirname, "../models/Image"))(sequelize, Sequelize),
    // Item: require(path.join(__dirname, "../models/Item"))(sequelize, Sequelize),
    // Message: require(path.join(__dirname, "../models/Message"))(sequelize, Sequelize),
    // Transaction: require(path.join(__dirname, "../models/Transaction"))(sequelize, Sequelize),

};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('../models/Customer')(sequelize, Sequelize);
db.categories = require('../models/Category')(sequelize, Sequelize);
db.discussions = require('../models/Discussion')(sequelize, Sequelize);
db.items = require('../models/Item')(sequelize, Sequelize);
db.images = require('../models/Image')(sequelize, Sequelize);
db.messages = require('../models/Message')(sequelize, Sequelize);
db.transactions = require('../models/Transaction')(sequelize, Sequelize);

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




module.exports = db;