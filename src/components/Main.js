require('bootstrap/less/bootstrap.less');

import React from 'react';
import { Grid } from 'react-bootstrap';

import FilterContainer from '../containers/FilterContainer'
import SearchContainer from '../containers/SearchContainer'
import ApplicationsContainer from '../containers/ApplicationsContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <Grid>
        <h1> Applications </h1>

        <FilterContainer />
        <SearchContainer />
        <ApplicationsContainer />
      </Grid>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
