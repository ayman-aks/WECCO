module.exports = (sequelize, Sequelize) => {

    const Item = sequelize.define("item", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        intitule: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        prix: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        etat: {
            type: Sequelize.STRING,
            defaultValue: "true",
            validate: {
                isIn: [
                    ['true', 'false']
                ],
            }
        },


    });



    // Item.hasMany(images, { foreignKey: 'id_item' });

    // Item.associate = models => {
    //     Item.hasMany(models.Image, {
    //         onDelete: 'cascade'
    //     });
    // }

    // Item.associate = models => {
    //     Item.belongsTo(models.Customer, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }

    // Item.associate = models => {
    //     Item.belongsTo(models.Category, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }

    return Item;

}