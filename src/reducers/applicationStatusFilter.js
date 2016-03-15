module.exports = function(state = 'ALL', action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case 'SET_APPLICATION_STATUS_FILTER':
      return action.filter
    default: {
      return state;
    }
  }
}
