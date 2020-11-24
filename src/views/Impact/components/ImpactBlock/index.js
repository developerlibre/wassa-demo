import React, {Component} from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import SlideShow from './components/SlideShow'
import ImpactDescription from './components/ImpactDescription'
import HeadingBlock from 'components/HeadingBlock'

class ImpactBlock extends Component {
  render () {
    const {
      data,
      title
    } = this.props
    if (!data) return null
    return (
      <div className="impact-block bg-white">
        <Container>
          <HeadingBlock
              title={title}
              className="orange-title"
          />
          <ImpactDescription data={data} />
          <Row>
            <Col xs="12">
              <SlideShow data={data.slides} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ImpactBlock
