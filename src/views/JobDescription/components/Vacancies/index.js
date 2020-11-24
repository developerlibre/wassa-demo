
import React, {Component} from 'react'
import translations from 'config/translations'
import {
  Container,
  Row
} from 'reactstrap'
import CardItem from 'components/CardItem'

export class Vacancies extends Component {
  constructor (props) {
    super(props)
    this.jobItem = this.jobItem.bind(this)
  }

  render () {
    const {jobDetail} = this.props.externalDashboardCMS
    console.log(this.props.id)
    if (jobDetail.relatingPosts && jobDetail.relatingPosts.length === 0) {
      return null
    }

    return (
      <div className="bg-orange-light our-mission-container">
        <h1 className="text-center heading-text orange-title vacan-text">
          {translations.career_vacanciesTitle}
        </h1>
        <Container>
          <Row>
            {jobDetail.relatingPosts.map(this.jobItem)}
          </Row>
        </Container>
      </div>
    )
  }

  jobItem (item, index) {
    return (
      <CardItem
          key={index}
          title={item.title}
          imageSrc={item.img}
          url={`#/job-description/${item.id}`}
      />
    )
  }
}
