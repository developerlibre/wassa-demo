import React, {Component} from 'react'
import translations from 'config/translations'
import MediaPlayer from 'components/MediaPlayer'
import Slideshow from 'components/Slideshow'

class NewsItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'isOpen': false,
      'photoIndex': 0,
      'isOpenLightBox': false
    }
    this.handleOpenVideo = this.handleOpenVideo.bind(this)
  }

  handleOpenVideo () {
    this.setState({'isOpen': true})
  }

  /*
   * Get name for image display for each type of news
   * @param {String} type News type
   * @return {string} image's name
   */
  _getIconType (type) {
    let icon = ''
    switch (type) {
      case "link":
        icon = 'icon-link'
        break
      case "slideshow":
        icon = 'icon-document'
        break
      case "video":
        icon = 'icon-video'
        break
      case "job":
        icon = 'icon-document'
        break
      case "facebook":
        icon = 'facebook'
        break
      default:
        icon = 'icon-link'
        break
    }
    return icon
  }

  /*
   * Render slideshow
   * @return {Object} Node
   */
  _renderSlideShow () {
    const {item} = this.props
    const images = item.slide.map((slideItem) => ({
      'src': slideItem.image
    }))
    return (
      <div>
        <p className="image-more" onClick={() => this.setState({'isOpenLightBox': true})}>
          {translations.homepage_readMore}
        </p>
        <Slideshow
            isOpenLightBox={this.state.isOpenLightBox}
            images={images}
        />
      </div>
    )
  }

  /*
   * Render read more button depends on type of news
   * @return {Object} Node
   */
  _renderViewMore () {
    const {item} = this.props
    let viewMore = ''
    switch (item.type) {
      case "link":
        viewMore = (
          <a className="image-more" href={item.url ? item.url : '#'} target="_blank">
            {translations.homepage_readMore}
          </a>
        )
        break
      case "job":
        viewMore = (
          <a className="image-more" href={`/#/job-description/${item.jobId}`}>
            {translations.homepage_readMore}
          </a>
        )
        break
      case "video":
        viewMore = (
          <div>
            <p className="image-more" onClick={this.handleOpenVideo}>
              {translations.homepage_readMore}
            </p>
            <MediaPlayer
                channel="custom"
                isOpen={this.state.isOpen}
                url={item.url}
                onClose={() => this.setState({'isOpen': false})}
            />
          </div>
        )
        break
      case "slideshow":
        viewMore = this._renderSlideShow()
        break
      default:
        viewMore = (
          <p className="image-more">
            {translations.homepage_readMore}
          </p>
        )
        break
    }
    return viewMore
  }

  render () {
    const {item} = this.props
    const iconType = this._getIconType(item.type)
    return (
      <div className="news-item">
        <div className="news-image-wrapper">
          <div className="image-animation">
            <img
                className="news-image"
                src={item.imageUrl}
                alt={item.type}
            />
            {this._renderViewMore()}
          </div>
          <img
              className="news-type"
              src={`img/external_dashboard/home/${iconType}.png`}
              srcSet={`img/external_dashboard/home/${iconType}@2x.png, img/external_dashboard/home/${iconType}@3x.png`}
          />
        </div>
        <div className="news-info">
          <p className="image-date caption1 semi-bold">
            {item.createdAt}
          </p>
          <p className="orange-title subtitle semi-bold">
            {item.title}
          </p>
          <p className="subhead no-margin-bottom">
            {item.content}
          </p>
        </div>
      </div>
    )
  }
}

export default NewsItem
