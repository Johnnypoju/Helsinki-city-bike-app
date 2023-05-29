"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const db_1 = require("../util/db");
const api = (0, supertest_1.default)(app_1.default);
beforeAll(async () => {
    await (0, db_1.connectToDatabase)();
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
