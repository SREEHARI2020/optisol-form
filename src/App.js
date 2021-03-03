import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import SignIn from './components/SignIn';
import View from './components/View';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <Router>

      <Switch>
      <Route exact path="/" ><SignIn/></Route>
      <Route exact path="/view" ><View/></Route>
     


     </Switch>
     </Router>
      </div>
    );
  }
}

export default App;
