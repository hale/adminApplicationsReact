import React from 'react';
import { Grid } from 'react-bootstrap';

import FilterContainer from '../containers/FilterContainer'
import SummaryContainer from '../containers/SummaryContainer'
import ApplicationsContainer from '../containers/ApplicationsContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <Grid>
        <h1> Applications </h1>

        <FilterContainer />
        <SummaryContainer />

        <ApplicationsContainer />
      </Grid>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
