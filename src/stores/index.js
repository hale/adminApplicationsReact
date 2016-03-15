const redux = require('redux');
const reducers = require('../reducers');

let applications = [];
for(let i = 0; i < 500; i++) {
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
  applicationStatusFilter: 'ALL',
  searchApplications: ''
};

module.exports = function() {
  const store = redux.createStore(reducers, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
