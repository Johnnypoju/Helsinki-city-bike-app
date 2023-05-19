import React from "react";
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

import { useStateValue } from "../state";
import { Journey } from "../types";


const JourneyList = () => {
    const [ { journeys }, dispatch ] = useStateValue();
    console.log(journeys);
    return (
        <div>
            <Box>
                <Typography align="center" variant="h1">
                    Journey List
                </Typography>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Departure Station</TableCell>
                        <TableCell>Return Station</TableCell>
                        <TableCell>Journey duration</TableCell>
                        <TableCell>Journey distance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(journeys).map((journey: Journey) => (
                        <TableRow key={journey.id}>
                            <TableCell>{journey.id}</TableCell>
                            <TableCell>{journey.departure_station_name}</TableCell>
                            <TableCell>{journey.return_station_name}</TableCell>
                            <TableCell>{journey.duration}</TableCell>
                            <TableCell>{journey.distance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
};

export default JourneyList;