
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Company from './components/pages/Company/Company';
import NewProject from './components/pages/NewProject/NewProject';
import Container from './components/layout/Container/Container';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';

import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/company">
            <Company/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/newProject">
            <NewProject/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
