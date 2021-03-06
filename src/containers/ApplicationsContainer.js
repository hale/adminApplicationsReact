import { connect } from 'react-redux'

import ApplicationTable from '../components/ApplicationTable'
import { getVisibleApplications } from '../selectors/getVisibleApplications'

const mapStateToProps = (state) => {
  return {
    applications: getVisibleApplications(state)
  }
}

const ApplicationsContainer = connect(
  mapStateToProps
)(ApplicationTable)

export default ApplicationsContainer
