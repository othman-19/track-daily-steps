const projectGoalsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_PROJECT_GOALS':
      return action.payload;
    default:
      return state;
  }
};

export default projectGoalsReducer;
