
import React, {Component} from 'react'
import translations from 'config/translations'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import PillButton from 'components/PillButton'
import HeadingBlock from 'components/HeadingBlock'

export class OurFamily extends Component {
  render () {
    return (
      <div className="bg-white our-mission-container">
        <HeadingBlock
            title={translations.about_ourFamily}
            className="orange-title"
            align="center"
        />
        <Container className="see-oppor">
          <Row>
            <Col xs="12" className="text-center">
              <PillButton
                  url="/#/careers"
                  title={translations.about_seeOppor}
                  className="uppercase semi-bold text-content-white-small fix-button"
                  size="big"
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
