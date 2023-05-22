import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container } from "@material-ui/core";
import {  JourneyArray,  StationArray } from "./types";
import JourneyList from './modules/JourneyList';
import StationList from './modules/StationList';
import { setJourneyList,  setStationList,  useStateValue } from "./state";
import { apiBaseUrl } from './constants';
import './index.css';

const App = ()  => {

  const [{page, limit}, dispatch ] = useStateValue();
  

  React.useEffect(() => {
    
    const fetchJourneyList = async () => {
      try {
        const { data: journeyListFromApi } = await axios.get<JourneyArray>(
          `${apiBaseUrl}/routes?page=${page}&limit=${limit}`
        )
        
        dispatch(setJourneyList(journeyListFromApi));
        
      } catch (error) {
        console.error(error);
      }
      };
  
    const fetchStationList = async () => {
      try {
        const { data: stationListFromApi } = await axios.get<StationArray>(
          `${apiBaseUrl}/stations?page=${page}&limit=${limit}`
        )
        dispatch(setStationList(stationListFromApi));
        
      } catch (error) {
        console.error(error);
      }
    };

    void fetchJourneyList();
    void fetchStationList();
    
  }, [dispatch, page, limit]);

  

  return (
    <div className='App'>
      <Router>
        <Container>
          <Button component={Link} to="/" >Journeys</Button>
          <Button component={Link} to="/stations" >Stations</Button>
          <Divider hidden/>
          <Routes>
            <Route path="/" element={<JourneyList />}/>
            <Route path="/stations" element={<StationList />}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
