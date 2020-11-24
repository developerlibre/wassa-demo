import React, {Component} from 'react'
import {
  Col
} from 'reactstrap'

export class InfoCard extends Component {
  render () {
    const {title, value} = this.props
    return (
      <Col lg="6" md="12" xs="12" className="contact-info">
        <p className="caption1White semi-bold">
          {title}
        </p>
        <p className="caption1White">
          {value}
        </p>
      </Col>
    )
  }
}
