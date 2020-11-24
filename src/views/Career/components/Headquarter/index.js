import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import HeadquarterBlock from './components/HeadquarterBlock'
import translations from 'config/translations'

class Headquarter extends Component {
  render () {
    const {externalDashboardCMS} = this.props
    return (
      <div id="careers-hq">
        <Container>
          <HeadquarterBlock
              title={translations.homepage_jpHQ}
              data={externalDashboardCMS.careerJP}
              type="jp"
          />
          <HeadquarterBlock
              title={translations.homepage_tanzaniaHQ}
              data={externalDashboardCMS.careerTanzania}
              type="tanzania"
          />
        </Container>
      </div>
    )
  }
}

export default Headquarter
