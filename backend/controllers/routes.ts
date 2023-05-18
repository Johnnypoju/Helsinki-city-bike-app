import { Route } from '../models';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
   if (req.query.page && req.query.limit) {
        const page : any = req.query.page;
        const limit : any = req.query.limit;
        const startIndex = (page - 1) * limit;
        const offset = page * limit;
        try {
            const routes = await Route.findAll({
                limit,
                offset,
                attributes: ['id','departure_station_name', 'return_station_name', 'distance', 'duration']
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
            next(error)
        }    
    }
})

export default router;