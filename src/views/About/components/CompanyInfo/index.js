
import React, {Component} from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import HeadingBlock from 'components/HeadingBlock'
import {Left} from './Left'
import {Right} from './Right'
import translations from 'config/translations'

export class CompanyInfo extends Component {
  render () {
    return (
      <div className="bg-white our-mission-container">
        <HeadingBlock
            title={translations.about_companyInfo}
            className="orange-title"
            align="center"
        />
        <Container>
          <Row className="desktop-space-35">
            <Col lg="6" md="12" xs="12">
              <Row>
                <Left title={translations.about_companyName} />
                <Right title="Wassha Joint Stock Company" />
              </Row>
            </Col>
            <Col lg="6" md="12" xs="12" >
              <Row>
                <Left title={translations.about_representedBy} />
                <Right title="Mr. Satoshi Akita (CEO)" />
              </Row>
            </Col>
          </Row>
          <Row className="desktop-space-35">
            <Col lg="6" md="12" xs="12" >
              <Row>
                <Left title={translations.about_establishedDate} />
                <Right title="Novemver 28th, 2013" />
              </Row>
            </Col>
            <Col lg="6" md="12" xs="12" >
              <Row>
                <Left title={translations.about_capital} />
                <Right title="¥ 846.000.000" />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12" xs="12">
              <Row>
                <Left title={translations.about_business} />
                <Col lg="8" md="8" xs="12" >
                  <div className="company-info-text" >
                    {'1. Electrification'}
                    <br />
                    {`"Power sale" service utilizes digital grid, and power service that provides "new experience" to people in rural areas through renting electronic equipment`}
                    <br />
                    <br />
                    {`2. Marketing & Consulting Business`}
                    <br />
                    {`Throughout our kiosks (retail shops) scattered in rural areas in Africa, we provide consulting service to support marketing and promotion services that make customers' products and services penetrate to the outback of rural areas, and executing necessary actions in upstream/ downstream processes.`}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="6" md="12" xs="12" >
              <Row className="desktop-space-35">
                <Left title={translations.about_businessBase} />
                <Col lg="8" md="8" xs="12" >
                  <div className="company-info-text">
                    {`Tanzania branch`}
                    <br />
                    {`Derm plaza 4F, Plot 16, Block45A, New Bagamoyo Road,
                    Kijitonyama, Dar es Salaam, P.O.Box.33452, TANZANIA`}
                  </div>
                </Col>
              </Row>
              <Row>
                <Left title={translations.about_numberOfEmployee} />
                <Right title="83" />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
