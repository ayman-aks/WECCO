module.exports = (sequelize, Sequelize) => {

    const Category = sequelize.define("category", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        libelle: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Category.associate = models => {
        Category.hasMany(models.Item, {
            onDelete: 'cascade'
        });
    }

    return Category;
}