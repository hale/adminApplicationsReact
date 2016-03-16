import { connect } from 'react-redux'

import ApplicationSearch from '../components/ApplicationSearch'

import { searchApplicationsFilter } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchQueryChange: (searchQuery) => {
      dispatch(searchApplicationsFilter(searchQuery))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationSearch)

export default SearchContainer
