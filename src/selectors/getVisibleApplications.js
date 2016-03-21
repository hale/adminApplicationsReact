import { createSelector } from 'reselect'

const getApplications = (state) => state.applications
const getSearchQuery = (state) => state.searchQuery
const getStatusFilter = (state) => state.statusFilter

const queryMatch = (application, searchQuery) => {
  if (searchQuery === undefined) { return false }
  return Object.values(application).some(value =>
    (String(value) === undefined) ? false : String(value).toLowerCase().includes(searchQuery)
  )
}

const statusMatch = (application, status) => {
  switch (status) {
    case 'ALL':
      return true
    case 'IN_PROGRESS':
      return application.status === 'In-Progress'
    case 'SUBMITTED':
      return application.status === 'Submitted'
    case 'COMPLETED':
      return application.status ==='Completed'
    default:
      return false
  }
}

export const getVisibleApplications = createSelector(
  [ getApplications, getStatusFilter, getSearchQuery ],
  (applications, statusFilter, searchQuery) => {
    return applications.filter(a =>
      statusMatch(a, statusFilter) && queryMatch(a, searchQuery)
    )
  }
)
