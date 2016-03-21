
import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

export default class Filter extends React.Component {
  render() {
    const { searchQuery, onSearchQueryChange, onStatusFilterChange } = this.props
    let options = [
      { display: 'Show All', value: 'ALL' },
      { display: 'In Progress', value: 'IN_PROGRESS' },
      { display: 'Submitted', value: 'SUBMITTED' },
      { display: 'Completed', value: 'COMPLETED' }
    ]

    return (
      <div>
        <Input
          type='select'
          label='Filter on Application Status'
          onChange={(event) => onStatusFilterChange(event.target.value)}
        >
        {options.map((option, index) =>
          <option key={index} value={option.value}>{option.display}</option>
        )}
        </Input>

        <Input
          type='text'
          value={searchQuery}
          placeholder='Search all attributes'
          label="Search"
          onChange={(e) => onSearchQueryChange(e.target.value)}
        />
      </div>
    )
  }
}

Filter.PropTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  onStatusFilterChange: PropTypes.func.isRequired
}
