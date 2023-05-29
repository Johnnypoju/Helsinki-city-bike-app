"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const router = express_1.default.Router();
router.get('/', async (req, res, next) => {
    if (req.query.page) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const offset = (page - 1) * limit;
        try {
            const count = await models_1.Station.count({});
            const stations = await models_1.Station.findAll({
                where: {
                    id: { [sequelize_1.Op.between]: [offset + 1, limit + offset] }
                },
                attributes: ['id', 'station_name_fi', 'address_fi'],
            });
            return res.json({ stations, count });
        }
        catch (error) {
            next(error.message);
        }
    }
    else {
        try {
            const stations = await models_1.Station.findAll();
            return res.json(stations);
        }
        catch (error) {
            next(error);
        }
    }
});
router.get('/:id', async (req, res, next) => {
    console.log(req.params.id);
    const station = await models_1.Station.findByPk(req.params.id, {
        attributes: ["id", "station_name_fi", "address_fi"]
    });
    const stationId = station?.dataValues.id;
    console.log(stationId);
    if (station) {
        const departureStations = await models_1.Route.count({
            where: {
                departureStationId: stationId
            }
        });
        const returStations = await models_1.Route.count({
            where: {
                returnStationId: stationId
            }
        });
        const stationResponse = { ...station.dataValues, departures: departureStations, returns: returStations };
        return res.json(stationResponse);
    }
});
router.get('/count', async (req, res, next) => {
    try {
        const count = await models_1.Station.count({});
        return res.json(count);
    }
    catch (error) {
        next(error.message);
    }
});
exports.default = router;
