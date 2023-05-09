import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

class Route extends Model {};

Route.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departure: {
        type: DataTypes.DATE,
        allowNull: false
    },
    return: {
        type: DataTypes.DATE,
        allowNull: false
    },
    departureStationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    departureStationName: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    returnStationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    returnStationName: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    distance: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'route'
});

export = Route;