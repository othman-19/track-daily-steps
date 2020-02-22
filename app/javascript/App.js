import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoalsList from './containers/GoalsList';
import ProjectsList from './containers/ProjectsList';
import ProjectGoals from './containers/ProjectGoals'
import Navbar from './components/Navbar'
import NewGoal from './components/NewGoal'
import NewProject from './components/NewProject'
import Contact from './components/Contact'
import About from './components/About'
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
            <Route key={Math.random()} path={'/newGoal/:projectId'} component={NewGoal}/>
            <Route path={'/contact'} component={Contact}/>
            <Route path={'/about'} component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;