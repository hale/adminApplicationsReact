import { connect } from 'react-redux'

import Filter from '../components/Filter'

import { setApplicationStatusFilter, searchApplicationsFilter } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
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

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
