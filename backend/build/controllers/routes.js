"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', async (req, res, next) => {
    if (req.query.page && req.query.limit) {
        const page = req.query.page;
        const limit = req.query.limit;
        const startIndex = (page - 1) * limit;
        const offset = page * limit;
        try {
            const routes = await models_1.Route.findAll({
                limit,
                offset,
                attributes: ['id', 'departure_station_name', 'return_station_name', 'distance', 'duration']
            });
            return res.json(routes);
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
exports.default = router;
