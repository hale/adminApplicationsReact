import { createSelector } from 'reselect'

const getApplications = (state) => state.applications
const getSearchQuery = (state) => state.searchQuery
const getStatusFilter = (state) => state.statusFilter

export const getVisibleApplicationsFilteredBySearchQuery = createSelector(
  [ getApplications, getSearchQuery ],
  (applications, searchQuery) => {
    if (searchQuery === undefined) { return applications }
    return applications.filter((a) => Object.values(a).some(value =>
      (String(value) === undefined) ? false : String(value).toLowerCase().includes(searchQuery))
    )
  }
)

export const getVisibleApplicationsFilteredByStatus = createSelector(
  [ getApplications, getStatusFilter ],
  (applications, status) => {
    switch (status) {
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
)

export const getVisibleApplications = createSelector(
  [ getVisibleApplicationsFilteredBySearchQuery, getVisibleApplicationsFilteredByStatus ],
  (searchFilteredApplications, statusFilteredApplications) => {
    return searchFilteredApplications.filter(a => statusFilteredApplications.indexOf(a) != -1)
  }
)
