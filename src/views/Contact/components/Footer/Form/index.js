
import React, {Component} from 'react'
import translations from 'config/translations'
import {
  Col
} from 'reactstrap'
import Input from 'react-validation/build/input'
import Select from 'react-validation/build/select'
import Form from 'react-validation/build/form'
import Textarea from 'react-validation/build/textarea'
import {
  required,
  checkSpecialChars
} from 'utils/validation'

const checkRequired = (value) => {
  if (required(value) === true) {
    return (
      <small className="form-text text-danger">
        {translations.contact_required}
      </small>
    )
  }
  return false
}

const checkRequiredDepartment = (value) => {
  if (value === '') {
    return (
      <small className="form-text text-danger">
        {translations.contact_pleaseChooseDepartment}
      </small>
    )
  }
  return false
}

const checkSizeFullName = (value) => {
  if (value.toString().length < 2) {
    return (
      <small className="form-text text-danger">
        {translations.contact_sizedFullnameLess}
      </small>
    )
  }
  if (value.toString().length > 50) {
    return (
      <small className="form-text text-danger">
        {translations.contact_sizedFullnameElder}
      </small>
    )
  }
  if (checkSpecialChars(value) === true) {
    return (
      <small className="form-text text-danger">
        {translations.contact_FullnameSpecialCharacter}
      </small>
    )
  }
  return false
}

const checkSizeCompany = (company) => {
  if (company.toString().length < 2) {
    return (
      <small className="form-text text-danger">
        {translations.contact_sizedCompanyLess}
      </small>
    )
  }
  if (company.toString().length > 50) {
    return (
      <small className="form-text text-danger">
        {translations.contact_sizedCompanyElder}
      </small>
    )
  }
  return false
}

class ContactForm extends Component {
  onSubmit (event) {
    event.preventDefault()
    this.form.validateAll()
  }

  render () {
    const {externalCMS} = this.props
    return (
      <Form className="contact-form" onSubmit={(event) => this.onSubmit(event)} ref={(form) => { this.form = form }}>
        <Col lg="10" className="contact-control">
          <div className="form-group">
            <div className="contact-input-text">
              <p className="caption1White">
                {translations.contact_full_name}
              </p>
              <p className="caption1White captionOptinal">
                {translations.contact_optional}
              </p>
            </div>
            <Input
                type="text"
                className="form-control form-control-sm"
                name="name"
                validations={[checkSizeFullName]}
            />
          </div>

          <div className="form-group contact-input">
            <div className="contact-input-text">
              <p className="caption1White">
                {translations.contact_company}
              </p>
              <p className="caption1White captionOptinal">
                {translations.contact_optional}
              </p>
            </div>
            <Input
                type="text"
                className="form-control form-control-sm"
                name="company"
                validations={[checkSizeCompany]}
            />
          </div>

          <div className="form-group contact-input">
            <p className="caption1White">
              {translations.label_contact}
            </p>
            <Select
                className="form-control form-control-sm contact-select"
                name="select"
                validations={[checkRequiredDepartment]}
            >
              {externalCMS.option.map(this.optionForm)}
            </Select>
          </div>
        </Col>
        <div className="form-group contact-input">
          <p className="caption1White">
            {translations.contact_message}
          </p>
          <Textarea
              className="form-control contact-textarea"
              rows="3"
              validations={[checkRequired]}
          />
        </div>
        <div className="contact-submit">
          <button type="submit" className="uppercase semi-bold text-content-white pill-button contact-button">
            {translations.contact_submit}
          </button>
        </div>
      </Form>
    )
  }

  optionForm (item, index) {
    return (
      <option key={index} value={item.value} >
        {item.option}
      </option>
    )
  }
}

export default ContactForm
