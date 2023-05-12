import express from 'express';
const app = express();

import { connectToDatabase } from './util/db';
import routesRouter from './controllers/routes';
import stationsRouter from './controllers/stations';
import errorHandler from './util/errorHandler';

import { PORT } from './util/config';

app.use(express.json());

app.use('/api/routes', routesRouter);
app.use('/api/stations', stationsRouter);

app.use(errorHandler);

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};2

start();
