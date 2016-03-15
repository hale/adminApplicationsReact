require('bootstrap/less/bootstrap.less');

import React from 'react';
import { Grid } from 'react-bootstrap';

import VisibleApplicationList from '../containers/VisibleApplications'

class AppComponent extends React.Component {
  render() {
    return (
      <Grid>
        <div className='index'>
          <h1> Applications </h1>
          <VisibleApplicationList />
        </div>
      </Grid>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
