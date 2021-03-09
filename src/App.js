import './App.css';
import PlayerPage from './components/PlayerPage'
import TeamsPage from './components/TeamsPage'


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
        <nav className="mt-5">
          <ul className="flex justify-center w-full">
            <li className="px-5 pb-2 border-b-2 border-white hover:border-b-2 hover:border-pink-400 cursor-pointer"><Link to="/">Teams</Link></li>
            <li className="px-5 pb-2 border-b-2 border-white hover:border-b-2 hover:border-pink-400 cursor-pointer"><Link to="/players">Players</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mt-5 mx-auto w-screen-95/100 lap:mt-20 lap:w-3/4">
        <Switch>
          <Route exact path='/'><TeamsPage /></Route>
          <Route exact path='/players'><PlayerPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
