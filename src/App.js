import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Headlines from './components/Headlines';
import Business from './components/Business';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Switch>
          <Route exact path="/" render={ ()=> <Headlines /> }/>
          <Route path="/business" render={ ()=> <Business /> }/>
      </Switch>
   
     
    </div>
  );
}

export default App;
