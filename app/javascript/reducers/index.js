import { combineReducers } from 'redux';
import goalsReducer from './goalsReducer';
import projectsReducer from './projectsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  goals: goalsReducer,
  current_user: userReducer,
  projects: projectsReducer,
});

export default rootReducer;