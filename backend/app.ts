import express from 'express';
const app = express();

import routesRouter from './controllers/routes';
import stationsRouter from './controllers/stations';
import errorHandler from './util/errorHandler';


app.use(express.json());

app.use('/api/routes', routesRouter);
app.use('/api/stations', stationsRouter);

app.use(errorHandler);

export default app;
