import { combineReducers } from 'redux';
const reducers = {
  applications: require('../reducers/applications.js'),
  statusFilter: require('../reducers/applicationStatusFilter.js'),
  searchApplications: require('../reducers/searchApplications.js')
};
module.exports = combineReducers(reducers);
