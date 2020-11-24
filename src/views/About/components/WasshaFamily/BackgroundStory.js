
import React, {Component} from 'react'
import {BackButton} from './BackButton'

export class BackgroundStory extends Component {
  render () {
    return (
      <div className="story-container">
        <div>
          <BackButton onClick={this.props.onBack} />
        </div>
        <p className="wassha-family-story">
          {`Satoshi has worked for a consulting firm in Japan and has been engaged in launching new businesses for Japanese companies. After that, he founded a NPO and promoted the advance of Japanese companies into developing countries.`}
        </p>
        <div>
          <a
              className=""
              href="https://linkedin.com"
              target="_blank"
          >
            <img className="wassha-family-social-img" src="./img/external_dashboard/about/instagram.png" />
          </a>
          <a
              className=""
              href="https://twitter.com"
              target="_blank"
          >
            <img className="wassha-family-social-img" src="./img/external_dashboard/about/twitter.png" />
          </a>
        </div>
      </div>
    )
  }
}
