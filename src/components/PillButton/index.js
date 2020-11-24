import React from 'react'

class PillButton extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (event) {
    if (this.props.onClick) {
      event.preventDefault()
      this.props.onClick()
    }
  }

  render () {
    return (
      <a
          target={this.props.newTab ? '_blank' : ''}
          href={this.props.url ? this.props.url : '#'}
          className={`pill-button ${this.props.className ? this.props.className : ''} ${this.props.size === 'big' ? 'big-pill-button' : ''}`}
          onClick={this.handleOnClick}
      >
        {this.props.title}
        {this.props.icon ? this.props.icon : null}
      </a>
    )
  }
}

export default PillButton
