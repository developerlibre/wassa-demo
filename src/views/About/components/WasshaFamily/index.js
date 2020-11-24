
import React, {Component} from 'react'
import {
  Container,
  Row
} from 'reactstrap'
import {CSSTransition} from 'react-transition-group'
import HeadingBlock from 'components/HeadingBlock'
//
import translations from 'config/translations'
import {BackgroundStory} from './BackgroundStory'

const data = [
0,
1,
2,
3,
0,
1,
2,
3,
2,
3,
0,
1,
2,
3,
4
]

export class WasshaFamily extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'showStory': {},
      'windowWidth': '1200',
      'slide': true,
      'activePage': 0
    }

    this.renderBlock = this._renderBlock.bind(this)
    this.updateDimensions = this._updateDimensions.bind(this)
    this.getItemsPerRow = this._getItemsPerRow.bind(this)
    this.renderLeftBtn = this._renderLeftBtn.bind(this)
    this.renderRightBtn = this._renderRightBtn.bind(this)
    this.getPagingData = this._getPagingData.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions)
    this.updateDimensions()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    const {activePage} = this.state
    let source = []
    const itemsPerRow = this.getItemsPerRow()

    source = this.getPagingData(data, activePage, itemsPerRow)

    return (
      <div id="wassha-family-wrapper" className="bg-white">
        <img
            id="wassha-family-dark-circle"
            src="img/external_dashboard/about/dark-circle.png"
            srcSet="img/external_dashboard/about/dark-circle@2x.png, img/external_dashboard/about/dark-circle@3x.png"
        />
        <div id="wassha-family" className="our-mission-container">
          <HeadingBlock
              title={translations.about_theWasshaFamily}
              className="orange-title wassha-family-heading"
              align="center"
          />
          <Container className="no-padding">
            <div id="about-wassha-family-heading">
              <h1 className="text-center heading-text">
                {/* translations.about_wasshaFamilyHeading */}
              </h1>
            </div>
          </Container>
          <div className="desktop-only container no-padding">
            <ul className="wassha-family-tab">
              <li>
                {translations.about_leadership}
              </li>
            </ul>
          </div>
          <div className="hide-top-shadow bg-white container no-padding">
            <Container className="wassha-family-border-gradient wassha-family-container">
              <Row className="wassha-family-row">
                {source.map((item, index) => this.renderBlock(source, item, index))}
              </Row>
              {/* this.renderLeftBtn() */}
              {/* this.renderRightBtn() */}
            </Container>
          </div>
        </div>
      </div>
    )
  }

  _getPagingData (source, activePage, itemsPerRow) {
    const {slide} = this.state
    if (slide) {
      return source.slice(activePage * itemsPerRow * 2, (activePage + 1) * itemsPerRow * 2)
    }
    return source
  }

  _renderLeftBtn () {
    const {slide, activePage} = this.state
    if (
      !slide ||
      (slide && activePage === 0)
    ) {
      return null
    }
    return (
      <a
          className="wassha-family-left-slide"
          onClick={() => this.setState((state) => ({...state, 'activePage': state.activePage - 1}))}
      >
        <img className="wassha-family-slide-btn-image" src="img/external_dashboard/about/arrow-left@2x.png" />
      </a>
    )
  }

  _renderRightBtn () {
    const {slide, activePage} = this.state
    const itemsPerRow = this.getItemsPerRow()

    if (!slide) {
      return null
    }

    const nextPage = this.getPagingData(data, activePage + 1, itemsPerRow)
    if (nextPage.length === 0) {
      return null
    }

    return (
      <a
          className="wassha-family-right-slide"
          onClick={() => this.setState((state) => ({...state, 'activePage': state.activePage + 1}))}
      >
        <img className="wassha-family-slide-btn-image" src="img/external_dashboard/about/arrow-right@2x.png" />
      </a>
    )
  }

  _updateDimensions () {
    this.setState({
      'windowWidth': window.outerWidth,
      'slide': window.outerWidth >= 992,
      'activePage': 0
    })
  }

  _getItemsPerRow () {
    const {windowWidth} = this.state

    if (windowWidth < 992) {
      return 2
    } else if (windowWidth < 1200) {
      return 3
    }
    return 4
  }

  _renderBlock (source, item, index) {
    const showStory = this.state.showStory[`k${index}`] || false
    const itemsPerRow = this.getItemsPerRow()
    const redund = (index + 1) % itemsPerRow
    const isLastRow = (index + 1) / itemsPerRow > Math.ceil(source.length / itemsPerRow) - 1 || index + 1 === source.length
    let borderClass = ''

    if (redund === 0 && !isLastRow) {
      borderClass = 'wassha-family-block-border-bottom'
    } else if (redund !== 0 && !isLastRow) {
      borderClass = 'wassha-family-block-border-right wassha-family-block-border-bottom'
    } else if (redund !== 0 && isLastRow) {
      borderClass = 'wassha-family-block-border-right'
    }

    return (
      <div className={`wassha-family-block ${borderClass}`} key={index}>
        <div className="text-center wassha-info-container">
          <div className="wassha-avatar-container">
            <img className="wassha-family-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xJudJDlavncIw6qrrGoYuWma5sBq7NjPMFV3_fDegKLUACASzQ" />
            <a
                className="wassha-family-show-story"
                onClick={() => {
                  this.setState((state) => {
                    state.showStory[`k${index}`] = true
                    return state
                  })
                }}
            >
              <img className="wassha-family-show-story-btn" src="img/external_dashboard/about/icon-dots.png" />
            </a>
          </div>
          <h1 className="wassha-family-title orange-title semi-bold">
            {`Tatsuki YONEDA`}
          </h1>
          <p className="company-info-text">
            {`Chief Operating Officer`}
          </p>
        </div>

        <CSSTransition
            in={showStory}
            timeout={{
              'enter': 900,
              'exit': 300
            }}
            classNames="background"
            unmountOnExit
            onExited={() => {
              this.setState((state) => {
                state.showStory[`k${index}`] = false
                return state
              })
            }}
        >
          {(state) => (
            <BackgroundStory
                onBack={() => {
                  this.setState((st) => {
                    st.showStory[`k${index}`] = false
                    return st
                  })
                }}
            />
          )}
        </CSSTransition>
      </div>
    )
  }
}
