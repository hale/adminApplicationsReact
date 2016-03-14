require('bootstrap/less/bootstrap.less');

import React from 'react';

import ApplicationList from './ApplicationList'

let applications = [];
for(let i = 0; i < 100; i++) {
  applications[i] = createApplication(i)
}

function createApplication(i) {
  let name = `Test Business ${i}`
  let email = `user${i}@example.com`
  return { 'id': i+1, 'businessName': name, 'applicantEmail': email }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <h1> Applications </h1>
        <ApplicationList applications={ applications }/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
