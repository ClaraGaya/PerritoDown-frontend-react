import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/HomePage';
import RoutinePage from './components/RoutinePage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateRoutinePage from './components/CreateRoutinePage';
// eslint-disable-next-line
import styles from './front.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/routines/:id' component={RoutinePage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/createroutine' component={CreateRoutinePage} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
