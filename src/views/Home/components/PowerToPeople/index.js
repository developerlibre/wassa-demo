import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import PillButton from 'components/PillButton'
import translations from 'config/translations'

class PowerToPeople extends Component {
  render () {
    const {externalDashboardCMS} = this.props
    return (
      <div id="power-to-people" className="">
        <Container id="ptp-wrapper">
          <h1 className="heading-text">
            {translations.homepage_powerToThePeople}
          </h1>
          <p className="text-content-white no-margin-bottom">
            {externalDashboardCMS.homeHeading}
          </p>
          <PillButton
              url="/#/about"
              title={translations.homepage_seeMore}
              className="uppercase semi-bold text-content-white-small"
              size="big"
          />
        </Container>
      </div>
    )
  }
}

export default PowerToPeople
