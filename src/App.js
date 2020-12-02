import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Headlines from './components/Headlines';
import Business from './components/Business';
import { Route, Switch } from 'react-router-dom';
import Context from './components/try';

function App() {
  return (
    <> 
    <Context> 
    <div className="App">
        <Navbar />
      <Switch>
          <Route exact path="/" component={Headlines}/>
          <Route path="/business" component={Business}/>
      </Switch>
    </div>
    </Context>
    </>
  );
}

export default App;
