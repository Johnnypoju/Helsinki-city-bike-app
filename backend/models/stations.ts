import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

class Station extends Model {};

Station.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    stationNameFi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stationNameSe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stationNameEn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addressFi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addressSe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cityFi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    citySe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    operator: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coordinateX: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    coordinateY: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'station'
});

export = Station;