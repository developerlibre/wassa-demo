
import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

import translations from 'config/translations'
import {HeadQuarterInfo} from 'containers/ExternalDashboard/components/Footer/HeadQuarterInfo'
import {FooterSocial} from 'containers/ExternalDashboard/components/Footer/FooterSocial'
import {InfoCard} from './InfoCard'
import ContactForm from './Form/index'

export class Footer extends React.Component {
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
          lg="6"
          md="6"
          xs="12"
      >
        <HeadQuarterInfo item={item} />
      </Col>
    )
  }

  /*
   * Render Social Link
   * @param {String} className define for desktop or mobile
   * @return {Object} Node
   */
  renderSocialLink (className) {
    return (
      <Row className={className}>
        <Col xs="12" md="6" lg="6" >
          <h3 className="contact-footer-heading">
            {translations.contact_followUs}
          </h3>
          <FooterSocial {...this.props} />
        </Col>
      </Row>
    )
  }

  render () {
    const {externalDashboardCMS} = this.props
    return (
      <footer id="footer">
        <div className="container">
          <Row>
            <Col lg="6" md="6" xs="12">
              <h3 className="contact-footer-heading">
                {translations.contact_contactUs}
              </h3>
              <Row>
                {externalDashboardCMS.headquarters.map((item, index) => this._renderHeadquarter(item, index))}
              </Row>
              <Col lg="12" md="12" xs="12" className="contact-info-container">
                <Row>
                  <InfoCard title={translations.contact_forGeneralInquiries} value="info@wassha.com" />
                  <InfoCard title={translations.contact_forGeneralJobOpportunities} value="jobs@wassha.com" />
                  <InfoCard title={translations.contact_forInvestmentPartnership} value="partners@wassha.com" />
                  <InfoCard title={translations.contact_signUpToBeAgent} value="signup@wassha.com" />
                </Row>
              </Col>
              {this.renderSocialLink('desktop-only')}
            </Col>
            <Col lg="6" md="6" xs="12" className="padding-left-60-desktop">
              <h3 className="contact-footer-heading">
                {translations.contact_dropUsAMessage}
              </h3>
              <ContactForm {...this.props} />
              {this.renderSocialLink('mobile-only')}
              <p className="caption1White text-center-mobile contact-copyright">
                {translations.homepage_copyright}
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    )
  }
}
