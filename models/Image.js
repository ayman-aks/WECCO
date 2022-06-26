module.exports = (sequelize, Sequelize) => {

    const Image = sequelize.define("image", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        url: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        principle: {
            type: Sequelize.STRING,
            defaultValue: "false",
            validate: {
                isIn: [
                    ['true', 'false']
                ],
            }
        },

    });

    // Image.belongsTo(items, { foreignKey: 'id_item' });



    // Image.associate = models => {
    //     Image.belongsTo(models.Image, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }


    return Image;

}