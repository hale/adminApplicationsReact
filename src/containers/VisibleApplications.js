import { connect } from 'react-redux'

import ApplicationList from '../components/ApplicationList'

import { setApplicationStatusFilter } from '../actions'
import { searchApplicationsFilter } from '../actions'

const getVisibleApplications = (applications, filter, searchQuery) => {
  return searchApplications(filterApplications(applications, filter), searchQuery);
}

const filterApplications = (applications, filter) => {
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

const doesMatch = (searchQuery, str) => {
  if (str == undefined) {
    return false
  } else {
    return str.toLowerCase().includes(searchQuery)
  }
}

const searchApplications = (applications, searchQuery) => {
  if (searchQuery === undefined) {
    return applications
  } else {
    return applications.filter((a) => Object.values(a).some(
      str => doesMatch(searchQuery, String(str)))
    )
  }
}

const mapStateToProps = (state) => {
  return {
    applications: getVisibleApplications(state.applications, state.applicationStatusFilter, state.searchApplications),
    searchQuery: state.searchApplications
  }
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
