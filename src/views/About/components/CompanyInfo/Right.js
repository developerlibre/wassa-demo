import React, {Component} from 'react'
import {
  Col
} from 'reactstrap'

export class Right extends Component {
  render () {
    const {title} = this.props
    return (
      <Col lg="8" md="8" xs="12" >
        <div className="company-info-text">
          {title}
        </div>
      </Col>
    )
  }
}
