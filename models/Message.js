module.exports = (sequelize, Sequelize) => {

    const Message = sequelize.define("message", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        contenu: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        }

    });

    return Message;
}