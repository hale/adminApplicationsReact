import React, { PropTypes } from 'react'
import Application from './Application'
import { Table } from 'react-bootstrap'

export default class ApplicationList extends React.Component {
  render() {
    const { applications } = this.props
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Business Name</th>
            <th>Applicant</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application =>
            <Application
              key={application.id}
              {...application}
            />
          )}
        </tbody>
      </Table>
    )
  }
}

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    businessName: React.PropTypes.string.isRequired,
    applicantEmail: React.PropTypes.string.isRequired
  }).isRequired).isRequired
}
