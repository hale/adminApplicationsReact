import React, { PropTypes } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'

import ApplicationCell from './ApplicationCell'
import Summary from '../components/Summary'

export default class ApplicationList extends React.Component {
  render() {
    const { applications, searchQuery } = this.props
    return (
      <section className='applicationList'>
        <Summary applications={applications} searchQuery={searchQuery} />
        <Table
          rowHeight={50}
          rowsCount={applications.length}
          headerHeight={50}
          width={1140}
          maxHeight={1200}>
          <Column
            columnKey="id"
            header={<Cell>ID</Cell>}
            cell={<ApplicationCell data={applications} col="id" />}
            fixed={true}
            width={60}
          />
          <Column
            columnKey="businessName"
            header={<Cell>Business Name</Cell>}
            cell={<ApplicationCell data={applications} col="businessName" />}
            flexGrow={1}
            width={200}
          />
          <Column
            columnKey="businessAddress"
            header={<Cell>Business Address</Cell>}
            cell={<ApplicationCell data={applications} col="businessAddress" />}
            flexGrow={2}
            width={300}
          />
          <Column
            columnKey="applicant"
            header={<Cell>Applicant</Cell>}
            cell={<ApplicationCell data={applications} col="applicantEmail" />}
            flexGrow={1}
            width={200}
          />
          <Column
            columnKey="status"
            header={<Cell>Status</Cell>}
            cell={<ApplicationCell data={applications} col="status" />}
            fixed={true}
            width={150}
          />
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
