import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.scss';

import Overview from './pages/overview';
import Starred from './pages/starred';

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="AppHeader">
          <h1>Trending on Github</h1>
          <h2>Keep in touch with the hottest new trends on Github</h2>
          <nav>
            <NavLink exact to="/" activeClassName="activeNavLink">Repository Overview</NavLink>
            <NavLink to="/starred" activeClassName="activeNavLink">My Starred Repositories</NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/starred">
              <Starred />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
