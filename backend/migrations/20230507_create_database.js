const { DataTypes } = require('sequelize');

module.exports = {
    up: async ({ context: queryInterface })  => {
            await queryInterface.createTable('routes', {
                id : {
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
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                duration : { 
                    type: DataTypes.INTEGER,
                    allowNull: false
                }

            })
        
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('routes')
    }
}