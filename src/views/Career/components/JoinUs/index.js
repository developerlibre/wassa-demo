import React, {Component} from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import translations from 'config/translations'
import HeadingBlock from 'components/HeadingBlock'

class JoinUs extends Component {
  render () {
    return (
      <div id="careers-joinus">
        <Container>
          <HeadingBlock
              title={translations.career_joinUs}
              className="orange-title"
              align="center"
          />
          <Row>
            <Col xs="12">
              <p className="medium-text description-join-us">
                {translations.career_joinUsDescription}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default JoinUs
