import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import translations from 'config/translations'
import HeadingBlock from 'components/HeadingBlock'

class BrighterFuture extends Component {
  render () {
    const {impact} = this.props
    return (
      <div id="brighter-future" className="bg-orange-light">
        <Container>
          <HeadingBlock
              title={translations.impact_aBrighterFutureForAfrica}
              className="orange-title"
              align="center"
          />
          <p className="big-text">
            {impact.textHeading1}
          </p>
          <p className="big-text">
            {impact.textHeading2}
          </p>
        </Container>
      </div>
    )
  }
}

export default BrighterFuture
