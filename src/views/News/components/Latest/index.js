import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import translations from 'config/translations'
import NewsBlock from 'components/NewsBlock'
import HeadingBlock from 'components/HeadingBlock'

class Heading extends Component {
  render () {
    return (
      <div id="news" className="bg-white">
        <Container>
          <HeadingBlock
              title={translations.homepage_latestNews}
              className="orange-title"
              align="center"
          />
          <NewsBlock limitDisplay={6} loadMore />
        </Container>
      </div>
    )
  }
}

export default Heading
