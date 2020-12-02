import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Headlines from './components/NavItems/Headlines'
import Business from './components/NavItems/Business'
import Entertainment from './components/NavItems/Entertainment'
import Health from './components/NavItems/Health'
import Science from './components/NavItems/Science'
import Sports from './components/NavItems/Sports'
import Technology from './components/NavItems/Technology'
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
          <Route path="/entertainment" component={Entertainment}/>
          <Route path="/health" component={Health}/>
          <Route path="/science" component={Science}/>
          <Route path="/sports" component={Sports}/>
          <Route path='/technology' component={Technology}/>
      </Switch>
    </div>
    </Context>
    </>
  );
}

export default App;
