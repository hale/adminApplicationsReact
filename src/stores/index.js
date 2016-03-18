const redux = require('redux');
const reducers = require('../reducers');

const Chance = require('chance');
var chance = new Chance();

let applications = [];
for(let i = 0; i < 10000; i++) {
  applications[i] = createApplication(i)
}
function createApplication(i) {
  return {
    'id': i+1,
    'businessName': `${chance.word()} Inc.`,
    'businessAddress': chance.address(),
    'applicantEmail': chance.email(),
    'startedAt': chance.date(),
    'status': chance.pickone(['In-Progress', 'Submitted', 'Completed'])
  }
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
