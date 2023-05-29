"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
const stations_1 = __importDefault(require("../models/stations"));
async function up() {
    try {
        let data = [];
        fs_1.default.createReadStream("./Helsingin_ja_Espoon_kaupunkipyoraasemat_avoin.csv")
            .pipe((0, csv_parse_1.parse)({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
            data.push({
                id: row[1],
                stationNameFi: row[2],
                stationNameSe: row[3],
                stationNameEn: row[4],
                addressFi: row[5],
                addressSe: row[6],
                cityFi: row[7],
                citySe: row[8],
                operator: row[9],
                capacity: row[10],
                coordinateX: row[11],
                coordinateY: row[12]
            });
        })
            .on("end", function () {
            console.log("finished.");
            console.log(data);
            stations_1.default.bulkCreate(data);
        })
            .on("error", function (error) {
            console.log(error.message);
        });
    }
    catch (e) {
        console.log(e.message);
    }
}
exports.up = up;
;
async function down() {
    await stations_1.default.destroy({ where: {} });
}
exports.down = down;
;
