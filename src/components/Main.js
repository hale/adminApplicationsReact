require('bootstrap/less/bootstrap.less');

import React from 'react';
import { Grid } from 'react-bootstrap';

import FilterContainer from '../containers/FilterContainer'
import SearchContainer from '../containers/SearchContainer'
import ResultsContainer from '../containers/ResultsContainer'
import ApplicationsContainer from '../containers/ApplicationsContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <Grid>
        <h1> Applications </h1>

        <FilterContainer />
        <SearchContainer />
        <ResultsContainer />

        <ApplicationsContainer />
      </Grid>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
