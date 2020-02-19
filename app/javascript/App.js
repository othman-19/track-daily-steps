import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoalsList from './containers/GoalsList';
import ProjectsList from './containers/ProjectsList';
import UsersList from './containers/UsersList';
import goalsReducer from './reducers/goalsReducer';


class App extends Component {
  render() {
    return (
      <div>
        <GoalsList />
      </div>
    );
  }
}

export default App;