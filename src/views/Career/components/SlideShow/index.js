import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import SlideItem from './components/SlideItem'
import Carousel from './components/Carousel'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class SlideShow extends Component {
  constructor (props) {
    super(props)
    const itemsDefault = [
      {
        'id': 1,
        'url': 'img/external_dashboard/home/instagram.png'
      },
      {
        'id': 2,
        'url': 'img/external_dashboard/home/twitter.png'
      },
      {
        'id': 3,
        'url': 'img/external_dashboard/home/twitter.png'
      },
      {
        'id': 4,
        'url': 'img/external_dashboard/home/linkedin.png'
      },
      {
        'id': 5,
        'url': 'img/external_dashboard/home/linkedin.png'
      },
      {
        'id': 6,
        'url': 'img/external_dashboard/home/instagram.png'
      },
      {
        'id': 7,
        'url': 'img/external_dashboard/home/instagram.png'
      },
      {
        'id': 8,
        'url': 'img/external_dashboard/home/twitter.png'
      }
    ]
    const descriptionsDefault = [
      {
        'id': 1,
        'name': 'Grace Galinoma 1',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 2,
        'name': 'Grace Galinoma 2',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 3,
        'name': 'Grace Galinoma 3',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 4,
        'name': 'Grace Galinoma 4',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 5,
        'name': 'Grace Galinoma 5',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 6,
        'name': 'Grace Galinoma 6',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 7,
        'name': 'Grace Galinoma 7',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      },
      {
        'id': 8,
        'name': 'Grace Galinoma 8',
        'description': '“Our mission is to provide power to the peopleMy passion for WASSHA job is to make people realize that they have power to solve social problems ,and to change their society. Now I deliver service & electric device rental service to the people who live in rural off- grid communities as Marketing Officer, a part of WASSHA team. Even me, I think now I engage in solve the social problem ,and change the society with my colleagues'
      }
    ]
    this.state = {
      'items': itemsDefault,
      'descriptions': descriptionsDefault,
      'active': 0,
      'direction': ''
    }
    this.handleClickLeft = this.handleClickLeft.bind(this)
    this.handleClickRight = this.handleClickRight.bind(this)
  }

  /*
   * Trigger previous slide for description
   */
  handleClickLeft () {
    this.slider.slickPrev()
  }

  /*
   * Trigger next slide for description
   */
  handleClickRight () {
    this.slider.slickNext()
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
    const slides = [
      <img key="1" src="https://picsum.photos/800/300/?random" alt="1" />,
      <img key="2" src="https://picsum.photos/800/301/?random" alt="2" />,
      <img key="3" src="https://picsum.photos/800/302/?random" alt="3" />,
      <img key="4" src="https://picsum.photos/800/303/?random" alt="4" />,
      <img key="5" src="https://picsum.photos/800/304/?random" alt="5" />,
      <img key="6" src="https://picsum.photos/800/300/?random" alt="6" />,
      <img key="7" src="https://picsum.photos/800/301/?random" alt="7" />,
      <img key="8" src="https://picsum.photos/800/302/?random" alt="8" />,
      <img key="9" src="https://picsum.photos/800/303/?random" alt="9" />
    ]
    const settings = {
      'dots': false,
      'infinite': true,
      'speed': 500,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'initialSlide': -1,
      'arrows': false
    }
    return (
      <div id="careers-slideshow">
        <Container>
          <div id="carousel-us">
            <Carousel slides={slides} onClickLeft={this.handleClickLeft} onClickRight={this.handleClickRight} />
            <Slider ref={(node) => { this.slider = node }} {...settings}>
              {this.state.descriptions.map((item, index) => this._renderDescription(item, index))}
            </Slider>
          </div>
        </Container>
      </div>
    )
  }
}

export default SlideShow
