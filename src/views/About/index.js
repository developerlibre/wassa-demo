
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  CompanyInfo,
  OurPartners,
  WasshaFamily,
  Heading,
  OurMission,
  WasshaValues,
  OurFamily
} from './components'
import Footer from 'containers/ExternalDashboard/components/Footer'

class About extends Component {
  render () {
    return (
      <div>
        <div id="about-heading-wrapper">
          <Heading />
          <img
              src="img/external_dashboard/about/left-white-circle@2x.png"
              alt="white-circle"
              className="about-white-circle about-circle"
          />
          <img
              src="img/external_dashboard/about/left-orange-circle@2x.png"
              alt="white-circle"
              className="about-orange-circle about-circle"
          />
          <img
              src="img/external_dashboard/about/right-dark-circle@2x.png"
              alt="white-circle"
              className="about-dark-circle about-circle"
          />
          <div id="about-heading-content" className="bg-dark our-mission-container">
            <OurMission {...this.props} />
            <WasshaValues {...this.props} />
          </div>
        </div>
        <CompanyInfo {...this.props} />
        <OurPartners {...this.props} />
        <WasshaFamily {...this.props} />
        <OurFamily {...this.props} />
        <Footer {...this.props} />
      </div>
    )
  }
}

/**
 * @inheritDoc
 */
function mapStateToProps (state) {
  const {
    externalDashboardCMS
  } = state

  return {
    externalDashboardCMS
  }
}

export default connect(mapStateToProps)(About)
