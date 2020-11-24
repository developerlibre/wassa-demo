import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import translations from 'config/translations'
import NewsBlock from 'components/NewsBlock'
import HeadingBlock from 'components/HeadingBlock'

class News extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    // Const { externalDashboardCMS } = this.props;
    return (
      <div id="home-news" className="bg-white">
        <Container>
          <HeadingBlock
              title={translations.homepage_latestNews}
              className="orange-title"
              align="center"
          />
          <NewsBlock limitDisplay={3} loadMore={false} />
        </Container>
      </div>
    )
  }
}

export default News
