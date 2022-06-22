// models.exports=class Customer{
//     constructor(email){
//         this.email=email
//     }
//     idCustomer
//     email
// }
const bcrypt = require('bcrypt');
module.exports = (sequelize, Sequelize) => {
  
    const Customer = sequelize.define("customer", {
      
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [2,100],
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [2,50],
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                isEmail: true,
            },
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telephone: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                is: /^7[05678][0-9]{7}$/,
            }
        }
    },
    {
        hooks: {
            beforeCreate: (customer, options) => {
                customer.password = bcrypt.hashSync(customer.password, 10);
            }
        }
    });

    return Customer;
};