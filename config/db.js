// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'wecco',
//   password : 'passer',
//   database : 'express'
// });
 
// connection.connect();

// module.exports=connection;

const Sequelize = require("sequelize");
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
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('../models/Customer')(sequelize, Sequelize);
module.exports = db;