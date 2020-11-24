import React, {Component} from 'react'
import {
  Col,
  Row
} from 'reactstrap'
// import translations from 'config/translations'

class ImpactDescription extends Component {
  render () {
    const {data} = this.props
    if (!data) return null
    return (
      <Row>
        <Col xs="12" md="7">
          <p className="caption2">
            {data.textContent1}
          </p>
          <p className="caption2">
            {data.textContent2}
          </p>
        </Col>
        <Col xs="12" md="5" className="item-middle">
          <div className="item-middle-wrapper">
            <div className="impact-image-wrapper">
              <img
                  className="image-center impact-image"
                  src={data.imgUrl}
              />
              <div className="impact-image-description">
                <h1 className="semi-bold">
                  {data.number}
                </h1>
                <p className="caption2">
                  {data.numberDescription}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default ImpactDescription
