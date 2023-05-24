import React from "react";

import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

import {  useStateValue } from "../../state";

import { useParams } from 'react-router-dom';
import { stationFetch } from "../../util/stationFetcher";


const StationView = () => {
    const [ { station }, dispatch ] = useStateValue();
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        if (id) {
            stationFetch(id, dispatch);
        }
    }, [dispatch, id]);
    
    
    
    return (
        <div>
            <Box>
                <Typography align="center" variant="h1">
                    Station List
                </Typography>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Station Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Departures from station</TableCell>
                        <TableCell>Returns to station</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            
                        <TableRow>
                        <TableCell>{station.station_name_fi}</TableCell>
                        <TableCell>{station.address_fi}</TableCell>
                        <TableCell>{station.departures}</TableCell>
                        <TableCell>{station.returns}</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </div>
    )
};

export default StationView;