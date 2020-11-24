
import React, {Component} from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import HeadingBlock from 'components/HeadingBlock'
//
import translations from 'config/translations'

export class WasshaValues extends Component {
  render () {
    const {wasshaValues} = this.props.externalDashboardCMS

    return (
      <div className="about-overflow-top">
        <HeadingBlock
            title={translations.about_wasshaValues}
            className="white-title our-values-title"
            align="center"
        />
        <Container>
          <Row>
            {wasshaValues.map(this.wasshaItem)}
          </Row>
        </Container>
      </div>
    )
  }

  wasshaItem (item, index) {
    return (
      <Col lg="4" md="12" xs="12" className="text-center" key={index} >
        <img className="wassha-values-avatar" src={item.img} />
        <h1 className="wassha-values-title">
          {item.title}
        </h1>
        <p className="wassha-values-desc">
          {item.desc}
        </p>
      </Col>
    )
  }
}
