import React, {Component} from 'react'

class SlideItem extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {item} = this.props
    return (
      <div className="careers-description">
        <h1 className="text-center slide-title white-title">
          {item.name}
        </h1>
        <p className="text-center medium-text white-text">
          {item.description}
        </p>
      </div>
    )
  }
}

export default SlideItem
