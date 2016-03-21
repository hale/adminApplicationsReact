import { connect } from 'react-redux'

import Summary from '../components/Summary'
import { getVisibleApplications } from '../selectors/getVisibleApplications'

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery,
    applications: getVisibleApplications(state)
  }
}

const SummaryContainer = connect(
  mapStateToProps
)(Summary)

export default SummaryContainer
