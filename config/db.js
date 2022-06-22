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
const items = require('../models/Item');

const path = require('path');
const Sequelize = require("sequelize");
const Item = require('../models/Item');
const sequelize = new Sequelize('wecco', 'wecco', 'passer', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
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
db.category = require('../models/Category')(sequelize, Sequelize);
db.discussions = require('../models/Discussion')(sequelize, Sequelize);
db.items = require('../models/Item')(sequelize, Sequelize);
db.images = require('../models/Image')(sequelize, Sequelize);
db.messages = require('../models/Message')(sequelize, Sequelize);
db.transactions = require('../models/Transaction')(sequelize, Sequelize);

module.exports = db;