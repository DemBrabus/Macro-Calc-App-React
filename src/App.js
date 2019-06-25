import React, { Component } from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Input from './App-Pages/Input/Input';
import Results from './App-Pages/Results/Results';

export default class App extends Component {
  render() {
    return (

      <Router>
         <div className="App">
        

           <Switch>

                <Route path='/' exact component={Input} />
                <Route path='/results' component={Results} />

           </Switch>


        </div>
      </Router>
     
    )
  }
}