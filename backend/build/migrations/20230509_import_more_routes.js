"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
const routes_1 = __importDefault(require("../models/routes"));
async function up() {
    try {
        let data = [];
        fs_1.default.createReadStream("./2021-06.csv")
            .pipe((0, csv_parse_1.parse)({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
            if (row[7] < 10 || row[6] < 10 || !Date.parse(row[0]) || !Date.parse(row[1])) {
            }
            else {
                data.push({
                    departure: row[0],
                    return: row[1],
                    departureStationId: row[2],
                    departureStationName: row[3],
                    returnStationId: row[4],
                    returnStationName: row[5],
                    distance: row[6],
                    duration: row[7]
                });
            }
        })
            .on("end", function () {
            console.log("finished.");
            console.log(data);
            routes_1.default.bulkCreate(data).then(() => {
                try {
                    let data = [];
                    fs_1.default.createReadStream("./2021-07.csv")
                        .pipe((0, csv_parse_1.parse)({ delimiter: ",", from_line: 2 }))
                        .on("data", function (row) {
                        if (row[7] < 10 || row[6] < 10 || !Date.parse(row[0]) || !Date.parse(row[1])) {
                        }
                        else {
                            data.push({
                                departure: row[0],
                                return: row[1],
                                departureStationId: row[2],
                                departureStationName: row[3],
                                returnStationId: row[4],
                                returnStationName: row[5],
                                distance: row[6],
                                duration: row[7]
                            });
                        }
                    })
                        .on("end", function () {
                        console.log("finished.");
                        console.log(data);
                        routes_1.default.bulkCreate(data);
                    })
                        .on("error", function (error) {
                        console.log(error.message);
                    });
                }
                catch (e) {
                    console.log(e.message);
                }
                ;
            });
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
    await routes_1.default.destroy({ where: {} });
}
exports.down = down;
;
