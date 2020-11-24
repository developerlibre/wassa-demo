import React, {Component} from 'react'
import {
  Col,
  Row
} from 'reactstrap'
import translations from 'config/translations'
import NewsItem from 'components/NewsItem'
import PillButton from 'components/PillButton'
import {getNews} from 'apis'

class NewsBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'loading': false,
      'source': [],
      'nextPageURL': '',
      'limitDisplay': props.limitDisplay ? props.limitDisplay : 4
    }
    this.handleOnClickLoadMore = this.handleOnClickLoadMore.bind(this)
  }

  componentWillMount () {
    getNews('/mock/news.json')
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

  handleOnClickLoadMore () {
    getNews(this.state.nextPageURL)
      .then((res) => {
        const {response} = res
        const {source, limitDisplay} = this.state
        this.setState({
          'loading': false,
          'source': [
            ...source,
            ...response.items
          ],
          'nextPageURL': response.nextPageURL,
          'limitDisplay': limitDisplay * 2
        })
      })
      .catch((err) => console.log('err', err))
  }

  /*
   * Render single news
   * @param {object} item News item
   * @param {int} index News item's index in array
   * @return {Node}
   */
  _renderNewsItem (item, index) {
    const lgSize = (this.state.limitDisplay % 3 === 0) ? 4 : 6
    return (
      <Col xs="12" md="4" lg={lgSize} key={index}>
        <NewsItem
            item={item}
        />
      </Col>
    )
  }

  /*
   * Render button
   * @return {Node}
   */
  _renderButton () {
    const {loadMore} = this.props
    if (!loadMore) {
      return (
        <PillButton
            url="/#/news"
            title={translations.homepage_seeMore}
            className="uppercase semi-bold text-content-white-small"
            size="big"
            // icon={<i className="fa fa-plus" />}
        />
      )
    } else if (this.state.nextPageURL) {
      return (
        <PillButton
            onClick={this.handleOnClickLoadMore}
            title={translations.homepage_loadMorePlus}
            className="uppercase semi-bold text-content-white-small pill-button-white "
            size="big"
            icon={<i className="fa fa-plus" />}
        />
      )
    }
    return null
  }

  render () {
    const {source, limitDisplay} = this.state
    return (
      <div>
        <Row>
          {source.slice(0, limitDisplay).map((item, index) => this._renderNewsItem(item, index))}
        </Row>

        <Row>
          <Col xs="12" className="text-center">
            {this._renderButton()}
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewsBlock
