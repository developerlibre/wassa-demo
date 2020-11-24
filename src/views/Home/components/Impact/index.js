import React, {Component} from 'react'
import OurImpact from './components/OurImpact'
import About from './components/About'

class Impact extends Component {
  render () {
    return (
      <div id="home-impact" className="bg-orange-light">
        <div id="home-impact-wrapper">
          <OurImpact {...this.props} />
          <About {...this.props} />
        </div>
      </div>
    )
  }
}

export default Impact
