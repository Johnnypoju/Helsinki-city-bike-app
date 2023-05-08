import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';

class Station extends Model {};

Station.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: false
    },
    stationName: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'station'
});

export = Station;