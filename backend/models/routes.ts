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
        allowNull: false,
        references: { model: 'stations', key: 'id'}
    },
    returnStationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'stations', key: 'id'}
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'route'
});

export = Route;