import { combineReducers } from 'redux';
const reducers = {
  applications: require('../reducers/applicationsReducer.js'),
  statusFilter: require('../reducers/statusFilterReducer.js'),
  searchQuery: require('../reducers/searchApplicationsReducer.js')
};
module.exports = combineReducers(reducers);
