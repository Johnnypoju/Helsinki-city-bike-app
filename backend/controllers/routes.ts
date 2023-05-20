import { Route } from '../models';
import express from 'express';
import { Op } from 'sequelize';

const router = express.Router();

router.get('/', async (req, res, next) => {
   if (req.query.page && req.query.limit) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        let offset :number;
        offset = (page-1) * limit;
        
        try {
            const routes = await Route.findAll({
                where: {
                    id: { [Op.between] : [offset+1, limit+offset] }
                },
                attributes: ['id','departure_station_name', 'return_station_name', 'distance', 'duration'],
            });
            return res.json(routes);
        } catch (error : any) {
            next(error.message);
        }
    }
    else {
        try {
            const error = { message: 'page or limit parameters missing.'}
            return res.status(400).json(error);
        } catch (error : any) {
            next(error);
        }    
    }
})

router.get('/count', async (req, res, next) => {
    try {
        const count = await Route.count({});
        return res.json(count);
    }
    catch (error: any) {
        next(error.message);
    }
})

export default router;