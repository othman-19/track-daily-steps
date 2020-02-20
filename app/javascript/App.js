import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoalsList from './containers/GoalsList';
import ProjectsList from './containers/ProjectsList';
import Navbar from './components/Navbar'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ GoalsList } />
            <Route exact path='/goals' component={ GoalsList } />
            <Route exact path='/projects' component={ ProjectsList } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;