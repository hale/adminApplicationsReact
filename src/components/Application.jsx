import React from 'react'

export default class Application extends React.Component {
  render() {
    const { id, businessName, businessAddress, applicantEmail, status } = this.props

    return (
      <tr>
        <td>{ id }</td>
        <td>{ businessName }</td>
        <td>{ businessAddress }</td>
        <td>{ applicantEmail }</td>
        <td>{ status }</td>
      </tr>
    )
  }
}

Application.propTypes = {
  id: React.PropTypes.number.isRequired,
  businessName: React.PropTypes.string.isRequired,
  businessAddress: React.PropTypes.string.isRequired,
  applicantEmail: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired
}
