import React, { PropTypes } from 'react'

export default class ApplicationSearch extends React.Component {
  render() {
    const { searchQuery, onSearchQueryChange} = this.props

    return (
      <input
        value={searchQuery}
        onChange={(event) => onSearchQueryChange(event.target.value)}
      />
    )
  }
}

ApplicationSearch.PropTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired
}
