import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react';
import SignIn from './components/SignIn';
import View from './components/View';
import Signup from './components/Signup';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
      <Switch>
      <Route exact path="/" ><SignIn/></Route>
      <Route exact path="/signup" ><Signup/></Route>
      <Route exact path="/view" ><View/></Route>
     


     </Switch>
     </Router>
      </div>
    );
  }
}

export default App;
