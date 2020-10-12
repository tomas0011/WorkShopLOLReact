const S = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('champion', {
        name: {
            type: S.TEXT,
            allowNull: false,
        },
        description: {
            type: S.TEXT,
            allowNull: false,
        },
        img: {
            type: S.TEXT,
            allowNull: false,
        }
    });
};