import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import useFetch from './useFetch';



function App() {


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route exact path="/"> 
            <Header />
            <Home />
          </Route>
          <Route path=""> 
            <h1>This endpoint does not exist.</h1>
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
