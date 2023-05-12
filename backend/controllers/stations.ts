import { Station, Route } from '../models';
import express from 'express';

const router = express.Router();

router.get('/', async (req,res, next) => {
    if (req.query.page) {
        const page : any = req.query.page;
        const limit : any = req.query.limit;
        const startIndex = (page - 1) * limit;
        const offset = page * limit;
        try {
            const routes = await Station.findAll({
                limit,
                offset,
                attributes: ['id','station_name_fi', 'address_fi'],
            });
            return res.json(routes);
        } catch (error : any) {
            next(error.message);
        }
    }
    else {
        try {

            const routes = await Station.findAll();
            return res.json(routes);
        } catch (error : any) {
            next(error)
        }    
    }
});

export default router;