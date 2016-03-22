import React from 'react'
import { BarChart } from 'react-d3-basic'

export default class Histogram extends React.Component {
  render() {
    const { applications } = this.props

    //const statuses = [...new Set(applications.map(app => app.status))]

    const statuses = ['In-Progress', 'Submitted', 'Completed']
    const applicationFrequency = statuses.map(status => (
      {
        'status': status,
        'frequency': (applications.filter(app => app.status === status).length / Number.parseFloat(applications.length))
      }
    ))

    const width = 500
    const height = 200
    const title = 'Bar Chart'
    const chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ]
    const x = function(d) {
      return d.status;
    }
    const xScale = 'ordinal'
    const yTicks = [10, '%']

    return (
    <BarChart
      data= {applicationFrequency}
      width= {width}
      height= {height}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
      yTicks= {yTicks}
    />
    )
  }
}
