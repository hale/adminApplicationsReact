import { connect } from 'react-redux'

import ApplicationList from '../components/ApplicationList'

import { setApplicationStatusFilter } from '../actions'
import { searchApplicationsFilter } from '../actions'

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

const doesMatch = (str) => {
  return (key) => (key + '').toLowerCase().indexOf(str) !== 1
}

const searchApplications = (applications, searchQuery) => {
  if (searchQuery !== '')
    return applications.filter((a) => Object.values(a).some(doesMatch(searchQuery)))
  else
    return applications
}

const mapStateToProps = (state) => {
  let visible = getVisibleApplications(state.applications, state.applicationStatusFilter) || []
  visible = searchApplications(visible, state.searchQuery)

  return { applications: visible }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStatusFilterChange: (filter) => {
      dispatch(setApplicationStatusFilter(filter))
    },
    onSearchQueryChange: (searchQuery) => {
      dispatch(searchApplicationsFilter(searchQuery))
    }
  }
}

const VisibleApplications = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationList)

export default VisibleApplications
