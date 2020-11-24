
import React, {Component} from 'react'
import translations from 'config/translations'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import PillButton from '../../components/PillButton'
import {withRouter} from 'react-router-dom'
import Footer from 'containers/ExternalDashboard/components/Footer'
import {connect} from 'react-redux'

class _404 extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick () {
    this.props.history.goBack()
  }

  render () {
    return (
      <div>
        <div className="bg-orange-light our-mission-container bg-404">
          <Container>
            <div className="img-404">
              <img src="/img/external_dashboard/404/group@2x.png" className="img2-404" />
            </div>
            <Row className="text-404">
              <Col lg="8">
                <h1 className="text-center heading-text orange-title text2-404">
                  {translations.unelectrified_404}
                </h1>
              </Col>
            </Row>
            <p className="content-404">
              {translations.content_404}
              <br />
              {translations.content2_404}
            </p>
            <div className="btn-404">
              <PillButton
                  url="/#/404"
                  title={translations.take_me_back_404}
                  className="uppercase semi-bold text-content-white"
                  size="big"
                  onClick={this.handleOnClick}
              />
            </div>
          </Container>
        </div>
        <Footer {...this.props} />
      </div>
    )
  }
}

/**
 * @inheritDoc
 */
function mapStateToProps (state) {
  const {
    language,
    externalDashboardCMS
  } = state

  return {
    language,
    externalDashboardCMS
  }
}

export default withRouter(connect(mapStateToProps)(_404))
