import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Planlama from './Components/Planlama';
import HomePage from './Components/HomePage';
import Agreement from './Components/Agreement';



function App() {
  return (
    <div> 
      <Switch>
        <Route
        exact path="/">
         <HomePage/>
        </Route>
      <Route
       exact path="/Planlama">
         <Planlama/>
      </Route>
      <Route
      exact path="/Agreement">
        <Agreement/>
      </Route>
    </Switch>
      
    </div>
  );
}

export default App;
