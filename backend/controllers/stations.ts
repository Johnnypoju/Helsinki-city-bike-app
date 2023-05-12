import { Station, Route } from '../models';
import express from 'express';
import { sequelize } from '../util/db';

const router = express.Router();

router.get('/', async (req,res, next) => {
    if (req.query.page) {
        const page : any = req.query.page;
        const limit : any = req.query.limit;
        const startIndex = (page - 1) * limit;
        const offset = page * limit;
        try {
            const stations = await Station.findAll({
                limit,
                offset,
                attributes: ['id','station_name_fi', 'address_fi'],
            });
            return res.json(stations);
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
    const station = await Station.findByPk(req.params.id);
    const stationId = station?.dataValues.id;
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
    
    
})

export default router;