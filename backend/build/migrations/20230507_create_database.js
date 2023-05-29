"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize = __importStar(require("sequelize"));
async function up({ context: queryInterface }) {
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
async function down({ context: queryInterface }) {
    await queryInterface.dropTable('routes');
    await queryInterface.dropTable('stations');
}
module.exports = { up, down };
