const S = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('stat', {
        hp: {
            type: S.DOUBLE,
            allowNull: false
        },
        attack: {
            type: S.DOUBLE,
            allowNull: false,
        },
        defense: {
            type: S.DOUBLE,
            allowNull: false,
        },
        attackSpeed: {
            type: S.DOUBLE,
            allowNull: false
        }
    });
};