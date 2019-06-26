import React, { Component } from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Input from './App-Pages/Input/Input';
import Results from './App-Pages/Results/Results';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Fats: 'Fatty',
      Carbs: 'Chuncky',
      Protein: 'Beefy',
    }
  }

 

      

  render() {

      const updateFats = (event) => {
        // this.setState({Fats: 'Fatty Patty'});
        // console.log(this.state.Fats);
        console.log('Clicked');
      }

       const updateCarbs = (event) => {
        this.setState({Carbs: event.target.value});
        console.log(this.state.Carbs);
      }

       const updateProtein = (event) => {
        this.setState({Protein: event.target.value});
        console.log(this.state.Protein);
      }

  console.log(this.state.Fats);
  console.log(this.state.Carbs);
  console.log(this.state.Protein);
    

    return (

      <Router>
         <div className="App">
        

           <Switch>
                <Route path='/' exact render={(props) => <Input {...props} 
                  updateFats={updateFats} 
                  updateCarbs={updateCarbs} 
                  updateProtein={updateProtein}  />} />

                {/* <Route path='/' exact component={Input} /> */}

                <Route path='/results' component={Results} />

           </Switch>


        </div>
      </Router>
     
    )
  }
}