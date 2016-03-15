export const setApplicationStatusFilter = (filter) => {
  return {
    type: 'SET_APPLICATION_STATUS_FILTER',
    filter
  }
}

export const searchApplicationsFilter = (searchQuery) => {
  return {
    type: 'SEARCH_APPLICATIONS',
    searchQuery
  }
}
