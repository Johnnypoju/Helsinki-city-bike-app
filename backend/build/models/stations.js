"use strict";
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class Station extends sequelize_1.Model {
}
;
Station.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    stationNameFi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    stationNameSe: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    stationNameEn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressFi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressSe: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cityFi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    citySe: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    operator: {
        type: sequelize_1.DataTypes.STRING,
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    coordinateX: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    coordinateY: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'station'
});
module.exports = Station;
