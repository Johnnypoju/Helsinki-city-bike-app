import fs from 'fs';
import { parse } from 'csv-parse';
import Route from '../models/routes';
 

export async function up() {
        try {
            let data : Array<any> = [];
            fs.createReadStream("./2021-06.csv")
                .pipe(parse({ delimiter: ",", from_line: 2}))
                .on("data", function (row) {
                    if (row[7] < 10 || row[6] < 10 || !Date.parse(row[0]) || !Date.parse(row[1])) {
                        
                    } else {
                        data.push({
                            departure: row[0],
                            return: row[1],
                            departureStationId: row[2],
                            departureStationName: row[3],
                            returnStationId: row[4],
                            returnStationName: row[5],
                            distance: row[6],
                            duration: row[7]
                        })
                    }
                    
                })
                .on("end", function() {
                    console.log("finished.");
                    console.log(data);
                    Route.bulkCreate(data).then( () => {

                   
                        try {
                        let data : Array<any> = [];
                        fs.createReadStream("./2021-07.csv")
                            .pipe(parse({ delimiter: ",", from_line: 2}))
                            .on("data", function (row) {
                                if (row[7] < 10 || row[6] < 10) {
                                    
                                } else {
                                    data.push({
                                        departure: row[0],
                                        return: row[1],
                                        departureStationId: row[2],
                                        departureStationName: row[3],
                                        returnStationId: row[4],
                                        returnStationName: row[5],
                                        distance: row[6],
                                        duration: row[7]
                                    })
                                }
                                
                            })
                            .on("end", function() {
                                console.log("finished.");
                                console.log(data);
                                Route.bulkCreate(data);
                            })
                            .on("error", function(error) {
                                console.log(error.message);
                            });
                        
                    } catch(e: any) {
                        console.log(e.message);
                    };
                });
                })
                .on("error", function(error) {
                    console.log(error.message);
                });
            
        } catch(e: any) {
            console.log(e.message);
        }
        
    };

export async function down () {
        await Route.destroy({where: {}})
      } ;