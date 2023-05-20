"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', async (req, res, next) => {
    if (req.query.page) {
        const page = req.query.page;
        const limit = req.query.limit;
        const startIndex = (page - 1) * limit;
        const offset = page * limit;
        try {
            const stations = await models_1.Station.findAll({
                limit,
                offset,
                attributes: ['id', 'station_name_fi', 'address_fi'],
            });
            return res.json(stations);
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
    const station = await models_1.Station.findByPk(req.params.id);
    const stationId = station?.dataValues.id;
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
exports.default = router;
