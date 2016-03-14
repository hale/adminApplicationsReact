require('bootstrap/less/bootstrap.less');

import React from 'react';

import VisibleApplicationList from '../containers/VisibleApplications'

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <h1> Applications </h1>
        <VisibleApplicationList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
