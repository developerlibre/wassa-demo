
import React, {Component} from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import HeadingBlock from 'components/HeadingBlock'
//
import translations from 'config/translations'

export class OurPartners extends Component {
  render () {
    const {externalDashboardCMS} = this.props

    return (
      <div className="bg-orange-light our-mission-container">
        <HeadingBlock
            title={translations.about_outPartners}
            className="orange-title"
            align="center"
        />
        <Container className="container-no-padding-top">
          <Row>
            {this.splitArray(externalDashboardCMS.ourPartners).map(this.renderItem)}
          </Row>
        </Container>
        <div className="mobile-only our-mission-img">
          <h1 className="text-center heading-text">
            {/* translations.about_heading */}
          </h1>
        </div>
      </div>
    )
  }

  splitArray (source) {
    const rows = []
    rows.push([])
    source.map((val) => {
      // if previous row is already max length, start a new one
      if (rows[rows.length - 1].length === 2) {
        rows.push([val])
      } else {
        // else add this to an already created row
        rows[rows.length - 1].push(val)
      }
      return val
    })
    return rows
  }

  renderItem (item, index) {
    return (
      <Col className={`wassha-section ${index % 2 === 1 ? 'wassha-section2' : ''}`} lg="12" md="12" xs="12" xl="6" key={index}>
        {
          (item[0]) && (
            <img className="bg-square" src={item[0].img} />
          )
        }
        {
          (item[1]) && (
            <img className="bg-square" src={item[1].img} />
          )
        }
      </Col>
    )
  }
}
