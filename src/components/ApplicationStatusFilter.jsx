import React, { PropTypes } from 'react'

export default class ApplicationStatusFilter extends React.Component {
  render() {
    let options = [
      { display: 'Show All', value: 'ALL' },
      { display: 'In Progress', value: 'IN_PROGRESS' },
      { display: 'Submitted', value: 'SUBMITTED' },
      { display: 'Completed', value: 'COMPLETED' }
    ]
    let { onStatusFilterChange } = this.props

    return (
      <div>
        <select onChange={(event) => onStatusFilterChange(event.target.value)}>
        {options.map((option, index) =>
          <option key={index} value={option.value}>{option.display}</option>
        )}
        </select>
      </div>
    )
  }
}

ApplicationStatusFilter.propTypes = {
  onStatusFilterChange: PropTypes.func.isRequired
}
