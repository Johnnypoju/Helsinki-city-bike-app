import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container } from "@material-ui/core";
import { Journey } from "./types";
import JourneyList from './JourneyList';
import { setJourneyList, useStateValue } from "./state";
import { apiBaseUrl } from './constants';


const App = ()  => {

  const [{page, limit}, dispatch ] = useStateValue();

  React.useEffect(() => {
    
      const fetchJourneyList = async () => {
        try {
        const { data: journeyListFromApi } = await axios.get<Journey[]>(
          `${apiBaseUrl}/routes?page=${page}&limit=${limit}`
        )
        dispatch(setJourneyList(journeyListFromApi));
      } catch (error) {
        console.error(error);
      }
      };
      void fetchJourneyList();

  }, [dispatch, page, limit]);

  return (
    <div className='App'>
      <Router>
        <Container>
          <Button component={Link} to="/">Journeys</Button>
          <Divider hidden/>
          <Routes>
            <Route path="/" element={<JourneyList />}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
