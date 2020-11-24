
import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import translations from 'config/translations'
import HeadingBlock from 'components/HeadingBlock'

export class OurMission extends Component {
  render () {
    const {externalDashboardCMS} = this.props
    return (
      <div className="about-overflow-top">
        <HeadingBlock
            title={translations.about_ourMission}
            className="white-title"
            align="center"
        />
        <Container>
          <p className="our-mission-text">
            {externalDashboardCMS.ourMission}
          </p>
        </Container>
      </div>
    )
  }
}
