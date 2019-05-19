import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import Reservation from './reservation/Reservation';
import Statistics from './statistics/Statistics'
import Confirmation from './confirmation/Confirmation'
import {HashRouter, Route}from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
/*
  componentDidMount() {
    fetch('/api/hello')
      .then(response => response.json())
      .then((data) => {
        this.setState({ message: data.message });
      }); 
  }*/

  render() {
   
    return (

      <div>
      <HashRouter>
  <Header/>
  <Route exact path = "/" component={Reservation}/>  
  <Route path = "/statistics" component={Statistics}/> 
  <Route path = "/confirm/:hour/:id" component={Confirmation}/> 

</HashRouter>
</div>
    );
  }
}

export default App;

