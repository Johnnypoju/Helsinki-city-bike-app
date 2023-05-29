import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container } from "@material-ui/core";

import JourneyList from './modules/JourneyList';
import StationList from './modules/StationList';
import StationView from './modules/StationView';

import './index.css';
import { setPage, useStateValue } from './state';

const App = ()  => {

  const [,dispatch] = useStateValue();
  const resetPage = async () => {
    await dispatch(setPage(1));
  }

  return (
    <div className='App'>
      <Router>
        <Container>
          <Button component={Link} onClick={resetPage} to="/" >Journeys</Button>
          <Button component={Link} onClick={resetPage} to="/stations" >Stations</Button>
          <Divider hidden/>
          <Routes>
            <Route path="/" element={<JourneyList />}/>
            <Route path="/stations" element={<StationList />}/>
            <Route path="/stations/:id" element={<StationView />}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
