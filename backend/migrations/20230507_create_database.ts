import { DataTypes } from 'sequelize';

export async function up({ context: queryInterface } : (any)) {
    await queryInterface.createTable('routes', {
        id: {
            type: DataTypes.INTEGER,
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
        departure_station_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        departure_station_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        return_station_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        return_station_name: {
            type: DataTypes.STRING,
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
    }),
        await queryInterface.createTable('stations', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: false
            },
            station_name_fi: {
                type: DataTypes.STRING,
                allowNull: false
            },
            station_name_se: {
                type: DataTypes.STRING,
                allowNull: false
            },
            station_name_en: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address_fi: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address_se: {
                type: DataTypes.STRING,
                allowNull: false
            },
            city_fi: {
                type: DataTypes.STRING,
                allowNull: false
            },
            city_se: {
                type: DataTypes.STRING,
                allowNull: false
            },
            operator: {
                type: DataTypes.STRING,
                allowNull: false
            },
            capacity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            coordinate_x: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            coordinate_y: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        });

}
export async function down({ context: queryInterface }  : (any)) {
    await queryInterface.dropTable('routes');
    await queryInterface.dropTable('stations');
}