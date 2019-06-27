import React, { Component } from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Input from './App-Pages/Input/Input';
import Results from './App-Pages/Results/Results';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Fats: 0,
      Carbs: 0,
      Protein: 0,
      total: 0,
    };
      this.updateFats = this.updateFats.bind(this);
      this.updateCarbs = this.updateCarbs.bind(this);
      this.updateProtein = this.updateProtein.bind(this);
      this.updateProtein = this.updateProtein.bind(this);
  }

      updateFats = (evt) => {
        this.setState({Fats: Number(evt.target.value) });
        console.log(this.state.Fats);
        
      }

       updateCarbs = (evt) => {
        this.setState({Carbs: Number(evt.target.value) });
        console.log(this.state.Carbs);
      }

       updateProtein = (evt) => {
        this.setState({Protein: Number(evt.target.value) });
        console.log(this.state.Protein);
      }

      calculate = (event) => {
        let macroSum = this.state.Fats + this.state.Carbs + this.state.Protein;
        this.setState({total: macroSum})
        console.log(this.state.total);
      }



      

  render() {

  // console.log(this.state.Fats);
  // console.log(this.state.Carbs);
  // console.log(this.state.Protein);
    

    return (

      <Router>
         <div className="App">
           

           <Switch>
                <Route path='/' exact render={(props) => <Input {...props} 
                  updateFats={this.updateFats} 
                  updateCarbs={this.updateCarbs} 
                  updateProtein={this.updateProtein}
                  calculate={this.calculate}  />} />

                {/* <Route path='/' exact component={Input} /> */}

                <Route path='/results' component={Results} />
                
           </Switch>
        </div>
      </Router>
     
    )
  }
}