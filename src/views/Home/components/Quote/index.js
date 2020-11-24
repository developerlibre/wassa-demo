import React, {Component} from 'react'
import {
  Container
} from 'reactstrap'
import translations from 'config/translations'

class Quote extends Component {
  render () {
    return (
      <div id="quote" className="">
        <Container id="">
          <p className="subhead-white">
            {translations.homepage_quote}
          </p>
          <p className="subhead-white semi-bold from">
            {translations.homepage_quoteFrom}
          </p>
        </Container>
      </div>
    )
  }
}

export default Quote
