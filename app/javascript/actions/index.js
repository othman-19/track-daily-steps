const GET_PROJECTS = 'GET_PROJECTS';
const GET_USER = 'GET_USER';
const GET_GOALS = 'GET_GOALS';
const GET_PROJECT_GOALS = 'GET_PROJECT_GOALS';

const getProjects = projects => ({
  type: GET_PROJECTS,
  payload: projects,
});

const getUser = user => ({
  type: GET_USER,
  payload: user,
});

const getGoals = goals => ({
  type: GET_GOALS,
  payload: goals,
});

const getProjectGoals = projectGoals => ({
  type: GET_PROJECT_GOALS,
  payload: projectGoals,
});

export {
  getProjects,
  getUser,
  getGoals,
  getProjectGoals,
};
