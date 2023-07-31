
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/company">
          <Company/>
        </Route>
        <Route path="/newProject">
          <NewProject/>
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
