const projectsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.payload;
    default:
      return state;
  }
};

export default goalsReducer;