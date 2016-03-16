import { connect } from 'react-redux'

import ApplicationStatusFilter from '../components/ApplicationStatusFilter'

import { setApplicationStatusFilter } from '../actions'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStatusFilterChange: (filter) => {
      dispatch(setApplicationStatusFilter(filter))
    }
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationStatusFilter)

export default FilterContainer
