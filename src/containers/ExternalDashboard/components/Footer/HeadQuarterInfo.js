import React, {Component} from 'react'

import translations from 'config/translations'
import PillButton from 'components/PillButton'

export class HeadQuarterInfo extends Component {
  render () {
    const {item} = this.props
    return (
      <div>
        <p className="semi-bold caption1White">
          {item.name}
        </p>
        <p className="address caption1White">
          {item.address}
        </p>
        <PillButton
            newTab
            url={item.url}
            title={translations.homepage_viewOnMap}
            className="small-pill-button-text"
        />
      </div>
    )
  }
}
