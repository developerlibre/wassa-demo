import React, {Component} from 'react'

class HeadingBlock extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      title,
      className,
      align
    } = this.props
    let blockClassName = ''
    switch (align) {
      case "right":
        blockClassName = 'heading-block-right'
        break
      case "center":
        blockClassName = 'heading-block-center'
        break
      default:
        blockClassName = ''
        break
    }
    return (
      <div className={`heading-block ${blockClassName}`}>
        <h2 className={`title ${className}`}>
          {title}
        </h2>
      </div>
    )
  }
}

export default HeadingBlock
