import React from 'react'

export default class Application extends React.Component {
  render() {
    const { id, businessName, applicantEmail } = this.props

    return (
      <tr>
        <td>{ id }</td>
        <td>{ businessName }</td>
        <td>{ applicantEmail }</td>
      </tr>
    )
  }
}

Application.propTypes = {
  id: React.PropTypes.number.isRequired,
  businessName: React.PropTypes.string.isRequired,
  applicantEmail: React.PropTypes.string.isRequired
}
