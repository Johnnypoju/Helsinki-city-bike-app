import React from "react";
import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

import { setJourneyList, setPage, useStateValue } from "../state";
import { Journey } from "../types";
import ReacPaginate from 'react-paginate';
import { apiBaseUrl } from "../constants";


const JourneyList = () => {
    const [ { journeys, count, page, limit }, dispatch ] = useStateValue();

    const paginate = async ({selected} : {selected: number}) => {
        dispatch(setPage(selected+1));
        const { data: journeyListFromApi } = await axios.get<Journey[]>(
            `${apiBaseUrl}/routes?page=${page}&limit=${limit}`
          )
        dispatch(setJourneyList(journeyListFromApi));
    };

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
                        <TableCell>Journey duration (min)</TableCell>
                        <TableCell>Journey distance (km)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(journeys).map((journey: Journey) => (
                        <TableRow key={journey.id}>
                            <TableCell>{journey.id}</TableCell>
                            <TableCell>{journey.departure_station_name}</TableCell>
                            <TableCell>{journey.return_station_name}</TableCell>
                            <TableCell>{journey.duration/60}</TableCell>
                            <TableCell>{journey.distance/1000}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ReacPaginate
                onPageChange={paginate}
                pageCount={Math.ceil(count / limit)}
                previousLabel={'Prev'}
                nextLabel={'Next'}
                containerClassName={'pagination'}
                pageLinkClassName={'page-number'}
                previousLinkClassName={'page-number'}
                nextLinkClassName={'page-number'}
                activeLinkClassName={'page-number'}
                />
        </div>
    )
};

export default JourneyList;