import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Display from './Display'
import Monster from './Monster'
import Header from './Header'
import Encounter from './Encounter'
import './App.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Display} />
        <Route path="/encounter" component={Encounter} />
        <Route path="/monster/" component={Monster} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  monster: PropTypes.object.isRequired,
}

export default App;
