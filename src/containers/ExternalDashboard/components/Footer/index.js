
import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'
import translations from 'config/translations'
import {HeadQuarterInfo} from './HeadQuarterInfo'
import {FooterSocial} from './FooterSocial'

class Footer extends React.Component {
  constructor (props) {
    super(props)
  }

  /*
   * Render Header quarter Information
   * @param {Object} item head quarter information
   * @param {number} index
   * @return {Object} Node
   */
  _renderHeadquarter (item, index) {
    return (
      <Col
          key={index}
          lg="3"
          md="4"
          xs="12"
      >
        <HeadQuarterInfo item={item} />
      </Col>
    )
  }

  render () {
    const {externalDashboardCMS} = this.props
    return (
      <footer id="footer">
        <div className="container padding-top-24">
          <Row id="info">
            <Col xs="12" md="1" lg="3">
              <a href="/#">
                <img
                    className="footer-logo"
                    src="img/external_dashboard/home/logo.png"
                    alt=""
                />
              </a>
            </Col>
            {externalDashboardCMS.headquarters.map((item, index) => this._renderHeadquarter(item, index))}
            <Col xs="12" md="3" lg="3" >
              <p className="caption1White email">
                {`${translations.homepage_email}: info@wassha.com`}
              </p>
              <FooterSocial {...this.props} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p className="caption1White text-center copyright">
                {translations.homepage_copyright}
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    )
  }
}

export default Footer
