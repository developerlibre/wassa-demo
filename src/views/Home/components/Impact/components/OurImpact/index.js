import React, {Component} from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import PillButton from 'components/PillButton'
import HeadingBlock from 'components/HeadingBlock'
import translations from 'config/translations'

class OurImpact extends Component {
  _renderImpact (item, index) {
    let image = ""
    switch (item.type) {
      case "co2":
        image = "co2"
        break
      case "energy":
        image = "energy"
        break
      case "briefcase":
        image = 'briefcase'
        break
      default:
        image = "co2"
        break
    }

    return (
      <Col xs="12" md="4" className="item-impact" key={index}>
        <img
            className="image-center"
            src={`img/external_dashboard/home/${image}.png`}
            srcSet={`img/external_dashboard/home/${image}@2x.png, img/external_dashboard/home/${image}@3x.png`}
            alt={image}
        />
        <h1 className="impact-heading semi-bold text-center">
          {item.number}
        </h1>
        <p className="caption2 text-center">
          {item.title}
        </p>
      </Col>
    )
  }

  render () {
    const {externalDashboardCMS} = this.props

    return (
      <div id="our-impact">
        <Container>
          <HeadingBlock
              title={translations.homepage_ourImpact}
              className="orange-title"
              align="center"
          />
          <Row className="row-center">
            {
              (externalDashboardCMS.impact && externalDashboardCMS.impact.length > 0) && (
                externalDashboardCMS.impact.map((item, index) => this._renderImpact(item, index))
              )
            }
          </Row>

          <Row>
            <Col xs="12" className="text-center">
              <PillButton
                  url="/#/impact"
                  title={translations.homepage_seeMore}
                  className="uppercase semi-bold text-content-white-small"
                  size="big"
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default OurImpact
