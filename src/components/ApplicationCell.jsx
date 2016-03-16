import React from 'react'
import { Cell } from 'fixed-data-table'

export default class ApplicationCell extends React.Component {
  render() {
    const { rowIndex, col, data } = this.props
    const contents = data[rowIndex][col]

    return (
      <Cell>{contents} </Cell>
    )
  }
}

ApplicationCell.propTypes = {
}
