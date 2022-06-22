module.exports = (sequelize, Sequelize) => {

    const Discussion = sequelize.define("discussion", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        cutomer_id_source: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Discussion;
}