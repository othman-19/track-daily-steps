const GET_PROJECTS = 'GET_PROJECTS';
const GET_USER = 'GET_USER';
const GET_GOALS = 'GET_GOALS';

const getProject = project => ({
  type: GET_PROJECTS,
  payload: project,
});

const getUser = user => ({
  type: GET_USER,
  payload: user,
});

const getGoals = goals => ({
  type: GET_GOALS,
  payload: goals,
});

export { getProject, getUser, getGoals };