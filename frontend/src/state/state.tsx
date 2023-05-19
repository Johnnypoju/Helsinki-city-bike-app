import React, { createContext, useContext, useReducer } from "react";
import { Journey } from "../types";


export type State = {
  journeys: { [id: number]: Journey };
  page: number;
  limit: number;
  
};

const initialState: State = {
  journeys: {},
  page: 1,
  limit: 20
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
