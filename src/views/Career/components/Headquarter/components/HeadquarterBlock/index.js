import React, {Component} from 'react'
import {
  Row,
  Col
} from 'reactstrap'
import CardItem from 'components/CardItem'
import PillButton from 'components/PillButton'
import HeadingBlock from 'components/HeadingBlock'
import translations from 'config/translations'
import {
  getCareerJP,
  getCareerTanzania
} from 'apis'

class HeadquarterBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'nextPageURL': '',
      'loading': false,
      'source': []
    }
    this.handleOnClickLoadMore = this.handleOnClickLoadMore.bind(this)
  }

  componentWillMount () {
    if (this.props.type === 'jp') {
      getCareerJP('/mock/careers-jp.json')
        .then((res) => {
          console.log('res here', res)
          const {response} = res
          this.setState({
            'loading': false,
            'source': [...response.items],
            'nextPageURL': response.nextPageURL
          })
        })
        .catch((err) => console.log('err', err))
    } else if (this.props.type === 'tanzania') {
      getCareerTanzania('/mock/careers-tanzania.json')
        .then((res) => {
          const {response} = res
          this.setState({
            'loading': false,
            'source': [...response.items],
            'nextPageURL': response.nextPageURL
          })
        })
        .catch((err) => console.log('err', err))
    }
  }

  /*
   * Handle onlick load more button
   * @return {Node}
   */
  handleOnClickLoadMore () {
    const {nextPageURL} = this.state
    if (this.props.type === 'jp') {
      getCareerJP(nextPageURL)
        .then((res) => {
          const {response} = res
          const {source} = this.state
          this.setState({
            'loading': false,
            'source': [
              ...source,
              ...response.items
            ],
            'nextPageURL': response.nextPageURL
          })
        })
        .catch((err) => console.log('err', err))
    } else if (this.props.type === 'tanzania') {
      getCareerTanzania(nextPageURL)
        .then((res) => {
          const {response} = res
          const {source} = this.state
          this.setState({
            'loading': false,
            'source': [
              ...source,
              ...response.items
            ],
            'nextPageURL': response.nextPageURL
          })
        })
        .catch((err) => console.log('err', err))
    }
  }

  render () {
    // if (!this.props.data) return null
    // const {items} = this.props.data
    if (!this.state.source) return null
    const {source} = this.state
    return (
      <div className="hq-block">
        <HeadingBlock
            title={this.props.title}
            className="orange-title"
            align="center"
        />
        <Row>
          {source.map((item, index) => this._renderJobItem(item, index))}
        </Row>
        <Row>
          <Col xs="12" className="text-center">
            {
              (this.state.nextPageURL) &&
                <PillButton
                    onClick={this.handleOnClickLoadMore}
                    title={translations.homepage_loadMorePlus}
                    className="uppercase semi-bold text-content-white pill-button-white"
                    size="big"
                    icon={<i className="fa fa-plus" />}
                />
            }
          </Col>
        </Row>
      </div>
    )
  }

  /*
   * Render single job
   * @param {object} item Job item
   * @param {int} index Job item's index in array
   * @return {Node}
   */
  _renderJobItem (item, index) {
    return (
      <CardItem
          key={index}
          title={item.title}
          imageSrc={item.imageUrl}
          url={`/#/job-description/${item.id}`}
      />
    )
  }
}

export default HeadquarterBlock
