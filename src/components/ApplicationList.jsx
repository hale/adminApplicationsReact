import React, { PropTypes } from 'react'
import { Table } from 'react-bootstrap'

import Application from './Application'
import ApplicationStatusFilter from './ApplicationStatusFilter'

export default class ApplicationList extends React.Component {
  render() {
    const { applications, onStatusFilterChange } = this.props
    return (
      <div>
        <ApplicationStatusFilter onStatusFilterChange={onStatusFilterChange}/>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Business Name</th>
              <th>Applicant</th>
              <th>Status</th>
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
      </div>
    )
  }
}

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    businessName: React.PropTypes.string.isRequired,
    applicantEmail: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStatusFilterChange: PropTypes.func.isRequired
}
