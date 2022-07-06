module.exports = (sequelize, Sequelize) => {

    const RequestTransaction = sequelize.define("requestTransaction", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        prix: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        etat:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "non-traité",
        }
    });

    return RequestTransaction;
}
