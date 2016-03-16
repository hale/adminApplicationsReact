require('bootstrap/less/bootstrap.less');
require('fixed-data-table/dist/fixed-data-table.css')

import React, { Component } from 'react';
import Main from '../components/Main';

export default class App extends Component {
  render() {
    return <Main />;
  }
}
