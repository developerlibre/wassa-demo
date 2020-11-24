import React from 'react'
import Lightbox from 'react-images'

/*
 * Render slideshow
 * @return {Object} Node
 */
class Slideshow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'currentImage': 0,
      'isOpenLightBox': false
    }
    this.handleCloseLightbox = this.handleCloseLightbox.bind(this)
    this.handleGoToNext = this.handleGoToNext.bind(this)
    this.handleGoToPrevious = this.handleGoToPrevious.bind(this)
  }

  handleGoToPrevious () {
    this.setState({'currentImage': this.state.currentImage - 1})
  }

  handleGoToNext () {
    this.setState({'currentImage': this.state.currentImage + 1})
  }

  handleCloseLightbox () {
    this.setState({
      'currentImage': 0,
      'isOpenLightBox': false
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({'isOpenLightBox': nextProps.isOpenLightBox})
  }

  render () {
    const {currentImage, isOpenLightBox} = this.state
    const {images} = this.props
    return (
      <Lightbox
          currentImage={currentImage}
          images={images}
          isOpen={isOpenLightBox}
          onClickPrev={this.handleGoToPrevious}
          onClickNext={this.handleGoToNext}
          onClose={this.handleCloseLightbox}
      />
    )
  }
}

export default Slideshow
