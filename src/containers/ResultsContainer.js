import { connect } from 'react-redux'

import Results from '../components/Results'

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

const getVisibleApplications = (applications, filter, searchQuery) => {
  return searchApplications(filterApplications(applications, filter), searchQuery);
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchApplications,
    applications: getVisibleApplications(state.applications,
                                         state.statusFilter,
                                         state.searchApplications)

  }
}

const ResultsContainer = connect(
  mapStateToProps
)(Results)

export default ResultsContainer
