const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'wecco',
  password : 'passer',
  database : 'express'
});
 
connection.connect();

module.exports=connection;