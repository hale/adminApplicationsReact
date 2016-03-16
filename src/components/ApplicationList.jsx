import React, { PropTypes } from 'react'
import { Table } from 'react-bootstrap'

import Application from './Application'
import Summary from '../components/Summary'

export default class ApplicationList extends React.Component {
  render() {
    const { applications, searchQuery } = this.props
    return (
      <section className='applicationList'>
        <Summary applications={applications} searchQuery={searchQuery} />
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Business Name</th>
              <th>Business Address</th>
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
      </section>
    )
  }
}

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    businessName: React.PropTypes.string.isRequired,
    businessAddress: React.PropTypes.string.isRequired,
    applicantEmail: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  searchQuery: PropTypes.string.isRequired
}
