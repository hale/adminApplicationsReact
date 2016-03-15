import React, { PropTypes } from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'

export default class Results extends React.Component {
  render() {
    const { applications, searchQuery } = this.props

    let style;
    if (applications.length < 1) {
      style = 'danger'
    } else if (String(searchQuery)) {
      style = 'success'
    } else {
      style = 'default'
    }

    return (
      <Panel header="Results" bsStyle={style}>
        <Grid>
          <Row className='show-grid'>
            <Col md={3}>
              <strong>Total</strong>
              <p>{applications.length}</p>
            </Col>

            <Col md={3}>
              <strong>In-Progress</strong>
              <p>{applications.filter(a => a.status == 'In-Progress').length}</p>
            </Col>

            <Col md={3}>
              <strong>Submitted</strong>
              <p>{applications.filter(a => a.status == 'Submitted').length}</p>
            </Col>

            <Col md={3}>
              <strong>Completed</strong>
              <p>{applications.filter(a => a.status == 'Completed').length}</p>
            </Col>
          </Row>
        </Grid>
      </Panel>
    )
  }
}

Results.PropTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    businessName: React.PropTypes.string.isRequired,
    businessAddress: React.PropTypes.string.isRequired,
    applicantEmail: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  searchQuery: PropTypes.string.isRequired
}
