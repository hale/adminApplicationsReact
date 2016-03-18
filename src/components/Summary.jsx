import React, { PropTypes } from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'

export default class Summary extends React.Component {
  render() {
    const { applications, searchQuery } = this.props

    let style = 'default';
    if (applications.length < 1) {
      style = 'danger'
    } else if (String(searchQuery)) {
      style = 'success'
    }

    let inProgress = applications.filter(a => a.status == 'In-Progress')
    let submitted = applications.filter(a => a.status == 'Submitted')
    let completed = applications.filter(a => a.status == 'Completed')

    return (
      <Panel header='Summary' bsStyle={style}>
        <Grid>
          <Row className='show-grid'>
            <Col md={3}>
              <strong>Total</strong>
              <p>{applications.length}</p>
            </Col>

            <Col md={3}>
              <strong>In-Progress</strong>
              <p>{inProgress.length}</p>
            </Col>

            <Col md={3}>
              <strong>Submitted</strong>
              <p>{submitted.length}</p>
            </Col>

            <Col md={3}>
              <strong>Completed</strong>
              <p>{completed.length}</p>
            </Col>
          </Row>
          <Row className='show-grid'>
            <Col md={12}>
            </Col>
          </Row>
        </Grid>
      </Panel>
    )
  }
}

Summary.PropTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    businessName: React.PropTypes.string.isRequired,
    businessAddress: React.PropTypes.string.isRequired,
    applicantEmail: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  searchQuery: PropTypes.string.isRequired
}
