import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Heading,
    Vacancies
} from './components'
import Sample from './components/Sample'
import Footer from 'containers/ExternalDashboard/components/Footer'

class JobDescription extends Component {
  render () {
    const {id} = this.props.match.params
    return (
      <div>
        <Heading {...this.props} id={id} />
        <Sample {...this.props} />
        <Vacancies {...this.props} id={id} />
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

export default connect(mapStateToProps)(JobDescription)
