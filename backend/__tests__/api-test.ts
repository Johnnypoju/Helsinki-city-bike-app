import { execute } from 'graphql';
import supertest from 'supertest';
import app from '../app';
import { connectToDatabase } from '../util/db';

const api = supertest(app);

beforeAll(async () => {
    await connectToDatabase();
});

    test('Proper message with parameters', async () => {
        const result = await api
            .get('/api/routes?page=2&limit=10')
            .expect(200)
            .expect('Content-Type', /json/);

        expect(result.body.length === 10);
        expect(!Number.isNaN(result.body.id));
        expect(Object.prototype.toString.call(result.body.departure) === "[object Date]");
        expect(result.body.duration > 10);
        expect(result.body.distance > 10);

    });
    test('Message with no parameters for pagination', async () => {
        const result = await api
        .get('/api/routes')
        .expect(400)
        .expect('Content-Type', /json/);

    expect(result.body.message === 'page or limit parameters missing.');
    console.log(result.body);
    });

    test('Single station view data content', async () => {
        const result = await api 
            .get('/api/stations/2')
            .expect(200)
            .expect('Content-Type', /json/);
            

        console.log(result.body);
        expect(result.body.station_name_fi);
        expect(result.body.address_fi);
        expect(result.body.departureStations);
        expect(result.body.returStations);
    });

