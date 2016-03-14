import { connect } from 'react-redux'
import { setApplicationStatusFilter } from '../actions'
import ApplicationList from '../components/ApplicationList'

const getVisibleApplications = (applications, filter) => {
  switch (filter) {
    case 'ALL':
      return applications
    case 'IN_PROGRESS':
      return applications.filter(a => a.status == 'In-Progress')
    case 'SUBMITTED':
      return applications.filter(a => a.status == 'Submitted')
    case 'COMPLETED':
      return applications.filter(a => a.status == 'Completed')
    default:
      return applications
  }
}

const mapStateToProps = (state) => {
  return {
    applications: getVisibleApplications(state.applications, state.applicationStatusFilter) || []
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onStatusFilterChange: (filter) => {
      dispatch(setApplicationStatusFilter(filter))
    }
  }
}

const VisibleApplications = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationList)

export default VisibleApplications
