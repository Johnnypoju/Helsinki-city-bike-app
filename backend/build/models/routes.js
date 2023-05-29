"use strict";
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class Route extends sequelize_1.Model {
}
;
Route.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departure: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    return: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    departureStationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    departureStationName: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    returnStationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    returnStationName: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    distance: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    duration: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'route'
});
module.exports = Route;
