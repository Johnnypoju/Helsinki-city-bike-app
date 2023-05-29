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
    if (req.query.page && req.query.limit) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        let offset;
        offset = (page - 1) * limit;
        try {
            const count = await models_1.Route.count({});
            const routes = await models_1.Route.findAll({
                where: {
                    id: { [sequelize_1.Op.between]: [offset + 1, limit + offset] }
                },
                attributes: ['id', 'departure_station_name', 'return_station_name', 'distance', 'duration'],
            });
            return res.json({ routes, count });
        }
        catch (error) {
            next(error.message);
        }
    }
    else {
        try {
            const error = { message: 'page or limit parameters missing.' };
            return res.status(400).json(error);
        }
        catch (error) {
            next(error);
        }
    }
});
router.get('/count', async (req, res, next) => {
    try {
        const count = await models_1.Route.count({});
        return res.json(count);
    }
    catch (error) {
        next(error.message);
    }
});
exports.default = router;
