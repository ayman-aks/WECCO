module.exports = (sequelize, Sequelize) => {

    const Discussion = sequelize.define("discussion", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });

    return Discussion;
}