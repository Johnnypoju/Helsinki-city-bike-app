"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
async function up({ context: queryInterface }) {
    await queryInterface.createTable('routes', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
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
        departure_station_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        departure_station_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        return_station_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        return_station_name: {
            type: sequelize_1.DataTypes.STRING,
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
    }),
        await queryInterface.createTable('stations', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: false
            },
            station_name_fi: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            station_name_se: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            station_name_en: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            address_fi: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            address_se: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            city_fi: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            city_se: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            operator: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            capacity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            coordinate_x: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false
            },
            coordinate_y: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false
            }
        });
}
async function down({ context: queryInterface }) {
    await queryInterface.dropTable('routes');
    await queryInterface.dropTable('stations');
}
module.exports = { up, down };
