import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import translations from 'config/translations'
import HeadingBlock from 'components/HeadingBlock'

class Social extends Component {
  render () {
    const {externalDashboardCMS} = this.props
    return (
      <div id="news-social" className="bg-orange-light">
        <Container>
          <HeadingBlock
              title={translations.contact_followUs}
              className="orange-title"
              align="center"
          />
          <ul className="social">
            <li>
              <a target="_blank" href={externalDashboardCMS.facebook} >
                <img src="img/external_dashboard/home/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href={externalDashboardCMS.twitter} >
                <img src="img/external_dashboard/home/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href={externalDashboardCMS.instagram} target="_blank" >
                <img src="img/external_dashboard/home/instagram.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href={externalDashboardCMS.linkedin} >
                <img alt="" src="img/external_dashboard/home/linkedin.png" />
              </a>
            </li>
          </ul>
        </Container>
      </div>
    )
  }
}

export default Social
