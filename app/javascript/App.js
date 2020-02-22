import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoalsList from './containers/GoalsList';
import ProjectsList from './containers/ProjectsList';
import ProjectGoals from './containers/ProjectGoals'
import Navbar from './components/Navbar'
import NewProject from './components/NewProject'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ GoalsList } />
            <Route path='/goals' component={ GoalsList } />
            <Route path='/projects' component={ ProjectsList } />
            <Route exact path='/newProject' component={ NewProject } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;