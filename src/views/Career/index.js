import React, {Component} from 'react'
import {connect} from 'react-redux'
import Heading from './components/Heading'
import JoinUs from './components/JoinUs'
import SlideShow from './components/SlideShow'
import Headquarter from './components/Headquarter'
import Footer from 'containers/ExternalDashboard/components/Footer'

class Career extends Component {
  render () {
    return (
      <div>
        <Heading />
        <div className="floating-wrapper bg-white">
          <div className="floating-content">
            <JoinUs />
            <SlideShow />
            <Headquarter {...this.props} />
          </div>
        </div>
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

export default connect(mapStateToProps)(Career)
