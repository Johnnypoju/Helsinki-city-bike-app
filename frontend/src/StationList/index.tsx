import React from "react";
import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

import { setStationList, setPage, useStateValue } from "../state";
import { StationArray, Station } from "../types";
import ReacPaginate from 'react-paginate';
import { apiBaseUrl } from "../constants";


const StationList = () => {
    const [ { stations, page, limit }, dispatch ] = useStateValue();

    const paginate = async ({selected} : {selected: number}) => {
        dispatch(setPage(selected+1));
        const { data: stationListFromApi } = await axios.get<StationArray>(
            `${apiBaseUrl}/stations?page=${page}&limit=${limit}`
          )
        dispatch(setStationList(stationListFromApi));
    };

    console.log(stations);
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
                        <TableCell>ID</TableCell>
                        <TableCell>Station Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(stations.stations).map((station: Station) => (
                        <TableRow key={station.id}>
                            <TableCell>{station.id}</TableCell>
                            <TableCell>{station.station_name_fi}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ReacPaginate
                onPageChange={paginate}
                pageCount={Math.ceil(stations.count / limit)}
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

export default StationList;