import { apiBaseUrl } from "../constants";
import axios from "axios";
import { Station } from "../types";
import { Dispatch } from "react";
import { setStation } from "../state";


export const stationFetch = async ( id: string, dispatch: Dispatch<any> ) => {
    const { data: stationFromApi } = await axios.get<Station>(
        `${apiBaseUrl}/stations/${id}`
      )
    dispatch(setStation(stationFromApi));
}