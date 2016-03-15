module.exports = function(state = '', action) {

  switch(action.type) {
    case 'SEARCH_APPLICATIONS':
      return action.searchQuery.toLowerCase()
    default: {
      return state;
    }
  }
}
