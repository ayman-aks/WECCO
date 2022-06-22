const { Sequelize, DataTypes }= require('sequelize');
const sequelize = new Sequelize('wecco', 'wecco', 'passer', {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:');
  });