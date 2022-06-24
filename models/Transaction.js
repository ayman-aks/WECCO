module.exports = (sequelize, Sequelize) => {

    const Transaction = sequelize.define("transaction", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        }
    });

    return Transaction;
}