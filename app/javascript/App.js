import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoalsList from './containers/GoalsList';
import ProjectsList from './containers/ProjectsList';
import UsersList from './containers/UsersList';
import goalsReducer from './reducers/goalsReducer';


// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <GoalsList />
//         <ProjectsList />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="">
            <Route exact path='/' component={ GoalsList } />
            <Route exact path='/projects' component={ ProjectsList } />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;