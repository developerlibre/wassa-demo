
import React, {Component} from 'react'
import translations from 'config/translations'

export class BackButton extends Component {
  render () {
    return (
      <div>
        <a
            className="cursor-pointer wassha-family-back"
            onClick={this.props.onClick}
        >
          <img className="wassha-family-back-img" src="./img/external_dashboard/about/arrow-back.png" />
          {translations.back}
        </a>
      </div>
    )
  }
}
