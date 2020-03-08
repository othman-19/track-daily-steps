const goalsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_GOALS':
      return action.payload;
    default:
      return state;
  }
};

export default goalsReducer;
