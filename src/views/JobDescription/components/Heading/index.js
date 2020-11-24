
import React, {Component} from 'react'

export class Heading extends Component {
  render () {
    const {jobDetail} = this.props.externalDashboardCMS

    return (
      <div id="career-heading">
        <img className="heading-job" src={jobDetail.img} />
      </div>
    )
  }
}
