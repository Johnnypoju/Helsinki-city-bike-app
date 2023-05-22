import { Station, Route } from '../models';
import express from 'express';
import { Op } from 'sequelize';
import { sequelize } from '../util/db';

const router = express.Router();

router.get('/', async (req,res, next) => {
    if (req.query.page) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const offset : number = (page-1) * limit;

        try {
            const count = await Station.count({});
            const stations = await Station.findAll({
                where: {
                    id: { [Op.between] : [offset+1, limit+offset] }
                },
                attributes: ['id','station_name_fi', 'address_fi'],
            });
            return res.json({ stations, count });
        } catch (error : any) {
            next(error.message);
        }
    }
    else {
        try {

            const stations = await Station.findAll();
            return res.json(stations);
        } catch (error : any) {
            next(error)
        }    
    }
});

router.get('/:id', async (req, res, next) => {
    console.log(req.params.id);
    const station = await Station.findByPk(req.params.id, {
        attributes: [ "id", "station_name_fi", "address_fi"]
    });
    const stationId = station?.dataValues.id;
    console.log(stationId);
    if (station) {
        const departureStations = await Route.count({
            where: {
                departureStationId: stationId
            }
        })
        const returStations = await Route.count({
            where: {
                returnStationId: stationId
            }
        })
        const stationResponse = { ...station.dataValues, departures: departureStations, returns: returStations};
        return res.json(stationResponse);
    }
    
    
});

router.get('/count', async (req, res, next) => {
    try {
        const count = await Station.count({});
        return res.json(count);
    }
    catch (error: any) {
        next(error.message);
    }
});

export default router;