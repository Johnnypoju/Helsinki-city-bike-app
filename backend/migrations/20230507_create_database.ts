import * as sequelize from 'sequelize';

async function up({ context: queryInterface } : (any)) {
    await queryInterface.createTable('routes', {
        id: {
            type: sequelize.DataTypes.INTEGER,
            autoIncrement: true
        },
        departure: {
            type: sequelize.DataTypes.DATE,
            allowNull: false
        },
        return: {
            type: sequelize.DataTypes.DATE,
            allowNull: false
        },
        departure_station_id: {
            type: sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        departure_station_name: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
        return_station_id: {
            type: sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        return_station_name: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
        distance: {
            type: sequelize.DataTypes.FLOAT,
            allowNull: false
        },
        duration: {
            type: sequelize.DataTypes.FLOAT,
            allowNull: false
        }
    }),
        await queryInterface.createTable('stations', {
            id: {
                type: sequelize.DataTypes.INTEGER,
                primaryKey: false
            },
            station_name_fi: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            station_name_se: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            station_name_en: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            address_fi: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            address_se: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            city_fi: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            city_se: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            operator: {
                type: sequelize.DataTypes.STRING,
                allowNull: false
            },
            capacity: {
                type: sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            coordinate_x: {
                type: sequelize.DataTypes.FLOAT,
                allowNull: false
            },
            coordinate_y: {
                type: sequelize.DataTypes.FLOAT,
                allowNull: false
            }
        });

}
async function down({ context: queryInterface }  : (any)) {
    await queryInterface.dropTable('routes');
    await queryInterface.dropTable('stations');
}

module.exports = { up, down};