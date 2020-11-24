import React, {Component} from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import PillButton from 'components/PillButton'
import translations from 'config/translations'
import MediaPlayer from 'components/MediaPlayer'
import HeadingBlock from 'components/HeadingBlock'

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'isOpen': false
    }
    this.handleOpenVideo = this.handleOpenVideo.bind(this)
  }

  handleOpenVideo () {
    this.setState({'isOpen': true})
  }

  render () {
    const {externalDashboardCMS} = this.props
    return (
      <div id="home-about" className="bg-dark">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <HeadingBlock
                  title={translations.homepage_aboutWASSHA}
                  className="white-title"
              />
              <p className="caption2White home-about-description">
                {externalDashboardCMS.about}
              </p>
              <div className="home-about-button">
                <PillButton
                    url="/#/business"
                    title={translations.homepage_seeMore}
                    className="uppercase semi-bold text-content-white-small"
                    size="big"
                />
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="video-frame">
                <img
                    className="video-image"
                    src="img/external_dashboard/home/video-player.png"
                    srcSet="img/external_dashboard/home/video-player@2x.png, img/external_dashboard/home/video-player@3x.png"
                    alt="video"
                />
                <img
                    src="img/external_dashboard/home/play.png"
                    srcSet="img/external_dashboard/home/play@2x.png, img/external_dashboard/home/play@3x.png"
                    className="play-icon"
                    onClick={this.handleOpenVideo}
                />
                <MediaPlayer
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="U82Ncactrpw"
                    onClose={() => this.setState({'isOpen': false})}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About
