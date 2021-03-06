import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import App from '../App';

const initialState = {
  goals: [{ id: 0, description: 'initial goal' }],
  projects: [{ id: 0, name: 'project_name' }],
  current_user: {},
  projectGoals: [{ id: 0, description: 'initial goal' }],
};

const store = createStore(rootReducer, initialState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});
