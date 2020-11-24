import React, {Component} from 'react'
import SlideItem from '../SlideItem'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class SlideShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'slides': props.data && props.data.length > 0 ? props.data : [],
      'active': 0,
      'direction': ''
    }
  }

  /*
   * Render description slide item
   * @param {object} item data of each slide
   * @param {number} index index in array
   * @return {Node}
   */
  _renderDescription (item, index) {
    return (
      <SlideItem key={item.id} item={item} />
    )
  }

  render () {
    const settings = {
      'dots': true,
      'infinite': true,
      'speed': 500,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'initialSlide': 1,
      'arrows': false,
      'dotsClass': "slick-dots custom-dots",
      'appendDots': (dots) => (
        <div>
          <ul>
            {dots}
          </ul>
        </div>
      )
    }
    return (
      <div id="impact-slideshow">
        <Slider ref={(node) => { this.slider = node }} {...settings}>
          {this.state.slides.map((item, index) => this._renderDescription(item, index))}
        </Slider>
      </div>
    )
  }
}

export default SlideShow
