
import React, {Component} from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import translations from 'config/translations'
import PillButton from 'components/PillButton'
import {withRouter} from 'react-router-dom'

class Sample extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick () {
      this.props.history.goBack()
  }

  render () {
  const {jobDetail} = this.props.externalDashboardCMS

  return (
    <div className="carrer">
      <Container>
        <Row>
          <Col>
            <div className="job-section">
              <a className="job-des" onClick={this.handleOnClick}>
                <img className="job-des-img" src="/img/external_dashboard/careers/arrow@2x.png" />
                {` Back`}
              </a>
            </div>
            <h3 className="job-text">
              {jobDetail.title}
            </h3>
            <p className="job-content">
              {jobDetail.desc}
            </p>
          </Col>
        </Row>
        <Row className="career-large">
          <Col lg="6" xs="12" md="12">
            <div className="btn-career">
              <PillButton
                  url="/"
                  title={translations.career_apply}
                  className="uppercase semi-bold text-content-white btn-job-detail"
                  size="big"
              />
            </div>
          </Col>
          <Col lg="6" xs="9" md="5">
            <Row className="job-small">
              <Col lg="4">
                <h4 className="job-text2">
                  {`Share`}
                </h4>
              </Col>
              <Col className="job-des2" lg="6" xs="12">
                <a href="https://www.facebook.com/" target="_blank">
                  <img className="img-icon" src="/img/external_dashboard/careers/facebook@2x.png" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <img className="img-icon" src="/img/external_dashboard/careers/twitter@2x.png" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <img className="img-icon" src="/img/external_dashboard/careers/instagram@2x.png" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <img className="img-icon" src="/img/external_dashboard/careers/linkedin@2x.png" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}
export default withRouter(Sample)
