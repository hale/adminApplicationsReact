import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

export default class ApplicationSearch extends React.Component {
  render() {
    const { searchQuery, onSearchQueryChange} = this.props

    return (
      <Input
        type='text'
        value={searchQuery}
        placeholder='Search all attributes'
        label="Search"
        onChange={(e) => onSearchQueryChange(e.target.value)}
      />
    )
  }
}

ApplicationSearch.PropTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired
}
