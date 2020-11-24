import React, {Component} from 'react'

class SlideItem extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {item} = this.props
    return (
      <div className="impact-slide-item">
        <img src="img/external_dashboard/impact/slide-dark-bg.png" className="slide-dark-bg" />
        <img src="img/external_dashboard/impact/slide-white-circle.png" className="slide-white-circle" />
        <div className="impact-slide-content">
          <div>
            <img src={item.url} alt="image-slide" className="human-quote" />
          </div>
          <div className="impact-quote">
            <p className="big-text white-text no-margin-bottom">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SlideItem
