import React, { createContext, useContext, useReducer } from "react";
import { Journey, Station } from "../types";


export type State = {
  journeys: { routes: { [id: number]: Journey }, count: number };
  stations: { stations: { [id: number]: Station }, count: number };
  page: number;
  limit: number;
  
};

const initialState: State = {
  journeys: { routes: {}, count: 0},
  stations: { stations: {}, count: 0 },
  page: 1,
  limit: 20,
  
};

export const StateContext = createContext<[State, React.Dispatch<any>]>([
  initialState,
  () => initialState
]);

type StateProviderProps = {
  reducer: React.Reducer<State, any>;
  children: React.ReactElement;
};

export const StateProvider = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
