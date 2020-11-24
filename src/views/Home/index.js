
import React, {Component} from 'react'
import PowerToPeople from './components/PowerToPeople'
import Impact from './components/Impact'
import Quote from './components/Quote'
import News from './components/News'
import Footer from 'containers/ExternalDashboard/components/Footer'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div>
        <PowerToPeople {...this.props} />
        <Impact {...this.props} />
        <Quote {...this.props} />
        <News {...this.props} />
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
    language,
    externalDashboardCMS
  } = state

  return {
    language,
    externalDashboardCMS
  }
}

export default connect(mapStateToProps)(Home)
