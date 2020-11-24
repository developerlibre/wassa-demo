import React, {Component} from 'react'
import {connect} from 'react-redux'
import Heading from './components/Heading'
import BrighterFuture from './components/BrighterFuture'
import ImpactBlock from './components/ImpactBlock'
import Footer from 'containers/ExternalDashboard/components/Footer'
import translations from 'config/translations'

class Impact extends Component {
  render () {
    const {impact} = this.props
    return (
      <div>
        <Heading />
        <BrighterFuture {...this.props} />
        <ImpactBlock
            data={impact.accessibleEnergy}
            title={translations.impact_accessibleEnergy}
        />
        <ImpactBlock
            data={impact.cleanEnergy}
            title={translations.impact_cleanEnergy}
        />
        <ImpactBlock
            data={impact.localOpportunities}
            title={translations.impact_localOpportunities}
        />
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
    externalDashboardCMS,
    impact
  } = state

  return {
    externalDashboardCMS,
    impact
  }
}

export default connect(mapStateToProps)(Impact)
