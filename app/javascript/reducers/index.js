import { combineReducers } from 'redux';
import goalsReducer from './goalsReducer';
import projectsReducer from './projectsReducer';
import projectGoalsReducer from './projectGoalsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  goals: goalsReducer,
  current_user: userReducer,
  projects: projectsReducer,
  projectGoals: projectGoalsReducer,
});

export default rootReducer;
