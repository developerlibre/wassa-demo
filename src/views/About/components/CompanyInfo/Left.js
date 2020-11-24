import React, {Component} from 'react'
import {
  Col
} from 'reactstrap'

export class Left extends Component {
  render () {
    const {title} = this.props
    return (
      <Col lg="4" md="4" xs="12" >
        <div className="semi-bold company-info-text">
          {title}
        </div>
      </Col>
    )
  }
}
