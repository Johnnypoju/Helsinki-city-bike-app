import { State } from "./state";
import { Journey } from "../types";

export type Action =
    | {
        type: "SET_JOURNEY_LIST";
        payload: Journey[];
    }
    | {
        type: "SET_PAGE";
        payload: number;
    }
    | {
        type: "SET_COUNT";
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
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload
            }
        case "SET_COUNT":
            return {
                ...state,
                count: action.payload
            }
        };
};

export const setJourneyList = (content: Journey[]) => {
    return {
        type: "SET_JOURNEY_LIST",
        payload: content
    };
};

export const setPage = (content: number) => {
    return {
        type: "SET_PAGE",
        payload: content
    }
};

export const setCount = (content: number) => {
    return {
        type: "SET_COUNT",
        payload: content
    }
};