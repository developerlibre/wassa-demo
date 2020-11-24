import React, {Component} from 'react'
import {connect} from 'react-redux'
import Heading from './components/Heading'
import Latest from './components/Latest'
import Social from './components/Social'
import Footer from 'containers/ExternalDashboard/components/Footer'

class News extends Component {
  render () {
    return (
      <div>
        <Heading />
        <div id="news-wrapper" className="bg-white">
          <div id="news-content">
            <Latest />
            <Social {...this.props} />
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

export default connect(mapStateToProps)(News)
