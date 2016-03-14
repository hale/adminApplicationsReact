const redux = require('redux');
const reducers = require('../reducers');

let applications = [];
for(let i = 0; i < 100; i++) {
  applications[i] = createApplication(i)
}
function createApplication(i) {
  let name = `Test Business ${i}`;
  let email = `user${i}@example.com`;
  let status = 'In-Progress';
  let rand = Math.random()
  if (rand < 0.33) {
    status = 'Submitted';
  } else if (rand < 0.66) {
    status = 'Completed';
  }
  return { 'id': i+1, 'businessName': name, 'applicantEmail': email, 'status': status }
}

const initialState = {
  applications: applications,
  applicationStatusFilter: {
    type: 'SET_APPLICATION_STATUS_FILTER',
    filter: 'ALL'
  }
};

module.exports = function() {
  const store = redux.createStore(reducers, initialState)
  return store
}
