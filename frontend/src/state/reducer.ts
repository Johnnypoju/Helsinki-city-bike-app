import { State } from "./state";
import { JourneyArray, StationArray } from "../types";

export type Action =
    | {
        type: "SET_JOURNEY_LIST";
        payload: JourneyArray;
    }
    | {
        type: "SET_STATION_LIST";
        payload: StationArray;
    }
    | {
        type: "SET_PAGE";
        payload: number;
    };

export const reducer = ( state: State, action: Action ): State => {
    switch (action.type) {
        case "SET_JOURNEY_LIST":
            console.log(action.payload);
            return {
                ...state,
                journeys: action.payload
                }
        case "SET_STATION_LIST":
            console.log(action.payload);
            return {
                ...state,
                stations: action.payload
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload
            }
        };
};

export const setJourneyList = (content: JourneyArray) => {
    return {
        type: "SET_JOURNEY_LIST",
        payload: content
    };
};

export const setStationList = (content: StationArray) => {
    return {
        type: "SET_STATION_LIST",
        payload: content
    }
}

export const setPage = (content: number) => {
    return {
        type: "SET_PAGE",
        payload: content
    }
};
