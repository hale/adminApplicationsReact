const redux = require('redux');
const reducers = require('../reducers');

const Chance = require('chance');
var chance = new Chance();

let applications = [];
for(let i = 0; i < 500; i++) {
  applications[i] = createApplication(i)
}
function createApplication(i) {
  let name = `${chance.word()} Inc.`
  let email = chance.email();
  let address = chance.address()
  let status = 'In-Progress';
  let rand = Math.random()
  if (rand < 0.33) {
    status = 'Submitted';
  } else if (rand < 0.66) {
    status = 'Completed';
  }

  return { 'id': i+1, 'businessName': name, 'businessAddress': address, 'applicantEmail': email, 'status': status }
}

const initialState = {
  applications: applications,
  statusFilter: 'ALL',
  searchQuery: ''
};

module.exports = function() {
  const store = redux.createStore(reducers, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
