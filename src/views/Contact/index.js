
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Heading,
  Footer
} from './components'

class Contact extends Component {
  render () {
    return (
      <div>
        <Heading />
        <div className="floating-wrapper">
          <div className="floating-content bg-white">
            <Footer {...this.props} />
          </div>
        </div>
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
    externalCMS
  } = state

  return {
    externalDashboardCMS,
    externalCMS
  }
}

export default connect(mapStateToProps)(Contact)
