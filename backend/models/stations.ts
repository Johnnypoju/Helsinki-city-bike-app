import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

class Station extends Model {};

Station.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    stationNameFi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stationNameSe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stationNameEn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressFi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressSe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityFi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    citySe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    operator: {
        type: DataTypes.STRING,
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
    timestamps: false,
    modelName: 'station'
});

export = Station;