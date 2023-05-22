import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

import { setJourneyList, setPage, useStateValue } from "../../state";
import { Journey, JourneyArray } from "../../types";
import ReacPaginate from 'react-paginate';
import { apiBaseUrl } from "../../constants";


const JourneyList = ( ) => {
    const [ { journeys, page, limit }, dispatch ] = useStateValue();

    const paginate = async ({selected} : {selected: number}) => {
        dispatch(setPage(selected+1));
        const { data: journeyListFromApi } = await axios.get<JourneyArray>(
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
                    {Object.values(journeys.routes).map((route: Journey) => (
                        <TableRow key={route.id}>
                            <TableCell>{route.id}</TableCell>
                            <TableCell>{route.departure_station_name}</TableCell>
                            <TableCell>{route.return_station_name}</TableCell>
                            <TableCell>{route.duration/60}</TableCell>
                            <TableCell>{route.distance/1000}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ReacPaginate
                onPageChange={paginate}
                pageCount={Math.ceil(journeys.count / limit)}
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