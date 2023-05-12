import fs from 'fs';
import { parse } from 'csv-parse';
import Station from '../models/stations';
 

export async function up() {
        try {
            let data : Array<any> = [];
            fs.createReadStream("./Helsingin_ja_Espoon_kaupunkipyoraasemat_avoin.csv")
                .pipe(parse({ delimiter: ",", from_line: 2}))
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
                        })
                    
                })
                .on("end", function() {
                    console.log("finished.");
                    console.log(data);
                    Station.bulkCreate(data);
                })
                .on("error", function(error) {
                    console.log(error.message);
                });
            
        } catch(e: any) {
            console.log(e.message);
        }
    };

export async function down () {
        await Station.destroy({where: {}})
      } ;