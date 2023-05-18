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
    console.log(result.body);
    });
    test('Message with no parameters for pagination', async () => {
        const result = await api
        .get('/api/routes')
        .expect(400)
        .expect('Content-Type', /json/);

    expect(result.body.message === 'page or limit parameters missing.');
    console.log(result.body);
    });

    

