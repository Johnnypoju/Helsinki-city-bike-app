import { State } from "./state";
import { Journey } from "../types";

export type Action =
    | {
        type: "SET_JOURNEY_LIST";
        payload: Journey[];
    };

export const reducer = ( state: State, action: Action ): State => {
    switch (action.type) {
        case "SET_JOURNEY_LIST":
            console.log("SET_ROUTES_LIST");
            return {
                ...state,
                journeys: {
                    ...action.payload.reduce(
                        (memo, journey) => ({ ...memo, [journey.id]: journey}),
                        {}
                    ),
                    ...state.journeys
                }
            };
    }
};

export const setJourneyList = (content: Journey[]) => {
    console.log(content);
    return {
        type: "SET_JOURNEY_LIST",
        payload: content
    };
};