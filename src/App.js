import { useState } from 'react'
import './App.css';
import PlayerPage from './components/PlayerPage'
import TeamsPage from './components/TeamsPage'

import PlayersData from './data/players'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="flex justify-center w-full">
            <li className="mx-5 my-5"><Link to="/">Teams</Link></li>
            <li className="mx-5 my-5"><Link to="/players">Players</Link></li>
          </ul>
        </nav>
        <h1>Sports Leage</h1>
      </div>
      <div className="mt-20 w-3/4 border mx-auto">
        <Switch>
          <Route exact path='/'><TeamsPage /></Route>
          <Route exact path='/players'><PlayerPage players={PlayersData} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
