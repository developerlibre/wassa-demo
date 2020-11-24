import React, {Component} from 'react'
import {
  Col
} from 'reactstrap'
import translations from 'config/translations'
import PillButton from 'components/PillButton'

class CardItem extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Col xs="12" xl="4" lg="4" md="6" sm="12" className="">
        <div className="vacancies">
          <img
              className="vacancies-img"
              src={this.props.imageSrc}
          />
          <p className="vacancies-text">
            {this.props.title}
          </p>
          <div className="btn-vacancies-2">
            <PillButton
                url={this.props.url}
                title={translations.homepage_seeMore}
                className="btn-vacancies uppercase"
                size="big"
            />
          </div>
        </div>
      </Col>
    )
  }
}

export default CardItem
