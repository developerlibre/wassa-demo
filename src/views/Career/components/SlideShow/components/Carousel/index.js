import React, {Component} from 'react'

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'slideTotal': 0,
      'slideCurrent': -1,
      'slides': []
    }
  }

  componentDidMount () {
    const slides = []
    this.props.slides.forEach((slide) => {
      const slideobject = {
        'class': "slider-single proactivede",
        'element': slide
      }
      slides.push(slideobject)
    })
    setTimeout(() => {
      this.setState({
        slides,
        'slideTotal': this.props.slides.length - 1
      })
    }, 300)
    if (this.state.slideCurrent === -1) {
      setTimeout(() => {
        this.slideRight()
      }, 500)
    }
  }

  /*
   * Handle when click next slide
   */
  slideRight () {
    let {slideCurrent} = this.state
    const {slideTotal} = this.state
    slideCurrent = (slideCurrent < slideTotal) ? (slideCurrent + 1) : 0
    const slide = this._setSlideRight(this.state.slides, slideTotal, slideCurrent)
    this.setState({
      'slides': slide,
      slideCurrent
    })
    this.props.onClickRight()
  }

  /*
   * Get index of 2 previous slide (for click next slide)
   * @param {number} slideCurrent index of current slide
   * @param {number} slideTotal total slide
   * @return {Object} index of 2 previous slide
   */
  _setPreactiveRightClick (slideCurrent, slideTotal) {
    const data = {
      'customPreactivede': 0,
      'customPreactive': 0
    }
    if (slideCurrent > 0) {
      data.customPreactive = slideCurrent - 1
      data.customPreactivede = (slideCurrent > 1) ? (slideCurrent - 2) : slideTotal
    } else {
      data.customPreactive = slideTotal
      data.customPreactivede = slideTotal - 1
    }
    return data
  }

  /*
   * Get index of 2 next slide (for click next slide)
   * @param {number} slideCurrent index of current slide
   * @param {number} slideTotal total slide
   * @return {Object} index of 2 next slide
   */
  _setProactiveRightClick (slideCurrent, slideTotal) {
    const data = {
      'customProactivede': 0,
      'customProactive': 0
    }
    if (slideCurrent < slideTotal) {
      data.customProactive = slideCurrent + 1
      data.customProactivede = (slideCurrent < slideTotal - 1) ? (slideCurrent + 2) : 0
    } else {
      data.customProactive = 0
      data.customProactivede = 1
    }
    return data
  }

  /*
   * Prepare slide for rendering (for click next slide)
   * @param {array} slide all slide
   * @param {number} slideTotal total slide
   * @param {number} slideCurrent index of current slide
   * @return {array} slide after preparing with class
   */
  _setSlideRight (slide, slideTotal, slideCurrent) {
    const {
      customPreactive,
      customPreactivede
    } = this._setPreactiveRightClick(slideCurrent, slideTotal)
    const {
      customProactive,
      customProactivede
    } = this._setProactiveRightClick(slideCurrent, slideTotal)
    return this._setClassOnSlideRight(slide, {customProactivede, customPreactivede, customProactive, customPreactive, slideCurrent})
  }

  /*
   * Add class to each slide (for click next slide)
   * @param {array} slide all slide
   * @param {object} arrayIndex index of previous 2 slide to next 2 slide
   * @return {array} slide after preparing with class
   */
  _setClassOnSlideRight (slide, arrayIndex) {
    const newSlide = [...slide]
    newSlide.forEach((slid, index) => {
      if (slid.class.includes("preactivede")) {
        slid.class = 'slider-single proactivede'
      }
      if (slid.class.includes("preactive")) {
        slid.class = 'slider-single preactivede'
      }
      const tmpClass = slid.class
      switch (index) {
        case arrayIndex.customProactivede:
          slid.class = `${tmpClass} custom-proactivede`
          break
        case arrayIndex.customPreactivede:
          slid.class = `${tmpClass} custom-preactivede`
          break
        case arrayIndex.customPreactive:
          slid.class = 'slider-single preactive'
          break
        case arrayIndex.customProactive:
          slid.class = 'slider-single proactive'
          break
        case arrayIndex.slideCurrent:
          slid.class = 'slider-single active'
          break
        default:
          slid.class = tmpClass
          break
      }
    })
    return newSlide
  }

  /*
   * Handle when click previous slide
   */
  slideLeft () {
    let {slideCurrent} = this.state
    const {slideTotal} = this.state
    slideCurrent = (slideCurrent > 0) ? (slideCurrent - 1) : slideTotal
    const slide = this._setSlideLeft(this.state.slides, slideTotal, slideCurrent)
    this.setState({
      'slides': slide,
      slideCurrent
    })
    this.props.onClickLeft()
  }

  /*
   * Add class to each slide (for click previous slide)
   * @param {array} slide all slide
   * @param {Object} arrayIndex index of previous 2 slide to next 2 slide
   * @return {array} slide after preparing with class
   */
  _setClassOnSlideLeft (slide, arrayIndex) {
    const newSlide = [...slide]
    newSlide.forEach((slid, index) => {
      if (slid.class.includes("proactivede")) {
        slid.class = 'slider-single preactivede'
      }
      if (slid.class.includes("proactive")) {
        slid.class = 'slider-single proactivede'
      }
      const tmpClass = slid.class
      switch (index) {
        case arrayIndex.customProactivede:
          slid.class = `${tmpClass} custom-proactivede`
          break
        case arrayIndex.customPreactivede:
          slid.class = `${tmpClass} custom-preactivede`
          break
        case arrayIndex.customPreactive:
          slid.class = 'slider-single preactive'
          break
        case arrayIndex.customProactive:
          slid.class = 'slider-single proactive'
          break
        case arrayIndex.slideCurrent:
          slid.class = 'slider-single active'
          break
        default:
          slid.class = tmpClass
          break
      }
    })
    return newSlide
  }

  /*
   * Prepare slide for rendering (for click previous slide)
   * @param {array} slide all slide
   * @param {number} slideTotal total slide
   * @param {number} slideCurrent index of current slide
   * @return {array} slide after preparing with class
   */
  _setSlideLeft (slide, slideTotal, slideCurrent) {
    const {
      customPreactive,
      customPreactivede
    } = this._setPreactiveLeftClick(slideCurrent, slideTotal)
    const {
      customProactive,
      customProactivede
    } = this._setProactiveLeftClick(slideCurrent, slideTotal)
    return this._setClassOnSlideLeft(slide, {customProactivede, customPreactivede, customProactive, customPreactive, slideCurrent})
  }

  /*
   * Get index of 2 next slide (for click previous slide)
   * @param {number} slideCurrent index of current slide
   * @param {number} slideTotal total slide
   * @return {Object} index of 2 previous slide
   */
  _setPreactiveLeftClick (slideCurrent, slideTotal) {
    const data = {
      'customPreactivede': 0,
      'customcustomPreactivePreactivede': 0
    }
    if (slideCurrent > 0) {
      data.customPreactive = slideCurrent - 1
      data.customPreactivede = (slideCurrent > 1) ? (slideCurrent - 2) : slideTotal
    } else {
      data.customPreactive = slideTotal
      data.customPreactivede = slideTotal - 1
    }
    return data
  }

  /*
   * Get index of 2 next slide (for click previous slide)
   * @param {number} slideCurrent index of current slide
   * @param {number} slideTotal total slide
   * @return {Object} index of 2 next slide
   */
  _setProactiveLeftClick (slideCurrent, slideTotal) {
    const data = {
      'customProactivede': 0,
      'customProactive': 0
    }
    if (slideCurrent < slideTotal) {
      data.customProactive = slideCurrent + 1
      data.customProactivede = (slideCurrent < slideTotal - 1) ? (slideCurrent + 2) : 0
    } else {
      data.customProactive = 0
      data.customProactivede = 1
    }
    return data
  }

  render () {
    return (
      <div className="react-3d-carousel">
        {this.state.slides && this.state.slides.length > 0 &&
          <div className="slider-container">
            <div className="slider-content">
              {this.state.slides.map((slider, index) => (
                <div className={slider.class} key={`slider-${index + 1}`}>
                  <div className="slider-left" onClick={this.slideLeft.bind(this)}>
                    <img src="img/external_dashboard/careers/arrow-left@3x.png" />
                  </div>
                  <div className="slider-right" onClick={this.slideRight.bind(this)}>
                    <img src="img/external_dashboard/careers/arrow-right@3x.png" />
                  </div>
                  <div className="slider-single-content">
                    {slider.element}
                  </div>
                </div>
                ))
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Carousel
