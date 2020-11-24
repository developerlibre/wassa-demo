import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

export default class ModalVideo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'isOpen': false
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleUpdateFocus = this.handleUpdateFocus.bind(this)
  }

  openModal () {
    this.setState({'isOpen': true})
  }

  handleCloseModal () {
    this.setState({'isOpen': false})
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  keydownHandler (ev) {
    if (ev.keyCode === 27) {
      this.setState({'isOpen': false})
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keydownHandler.bind(this), false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keydownHandler)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({'isOpen': nextProps.isOpen})
  }

  componentDidUpdate () {
    if (this.state.isOpen && this.modal) {
      this.modal.focus()
    }
  }

  handleUpdateFocus (ev) {
    if (ev.keyCode === 9) {
      ev.preventDefault()
      ev.stopPropagation()
      if (this.modal === document.activeElement) {
        this.modalbtn.focus()
      } else {
        this.modal.focus()
      }
    }
  }

  getQueryString (obj) {
    let url = ''
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] !== null) {
          url += `${key}=${obj[key]}&`
        }
      }
    }
    return url.substr(0, url.length - 1)
  }

  getYoutubeUrl (youtube, videoId) {
    const query = this.getQueryString(youtube)
    return `//www.youtube.com/embed/${videoId}?${query}`
  }

  getVimeoUrl (vimeo, videoId) {
    const query = this.getQueryString(vimeo)
    return `//player.vimeo.com/video/${videoId}?${query}`
  }

  getYoukuUrl (youku, videoId) {
    const query = this.getQueryString(youku)
    return `//player.youku.com/embed/${videoId}?${query}`
  }

  getVideoUrl (opt, videoId) {
    if (opt.channel === 'youtube') {
      return this.getYoutubeUrl(opt.youtube, videoId)
    } else if (opt.channel === 'vimeo') {
      return this.getVimeoUrl(opt.vimeo, videoId)
    } else if (opt.channel === 'youku') {
      return this.getYoukuUrl(opt.youku, videoId)
    }
    return null
  }

  getPadding (ratio) {
    const arr = ratio.split(':')
    const width = Number(arr[0])
    const height = Number(arr[1])
    const padding = height * 100 / width
    return `${padding}%`
  }

  render () {
    const style = {
      "paddingBottom": this.getPadding(this.props.ratio)
    }
    let iframe = null

    // When using custom must define url as props
    if (this.props.channel === 'custom') {
      iframe = (
        <video width="100%" controls controlsList="nodownload">
          <source src={this.props.url} />
        </video>
      )
    } else {
      iframe = (
        <iframe
            width="460"
            height="230"
            src={this.getVideoUrl(this.props, this.props.videoId)}
            frameBorder="0"
            allowFullScreen={this.props.allowFullScreen}
            tabIndex="-1"
        />
      )
    }

    return (
      <CSSTransition
          classNames={this.props.classNames.modalVideoEffect}
          timeout={this.props.animationSpeed}
      >
        {() => {
          if (!this.state.isOpen) {
            return null
          }

          return (
            <div
                className={this.props.classNames.modalVideo}
                tabIndex="-1"
                role="dialog"
                aria-label={this.props.aria.openMessage}
                onClick={this.handleCloseModal}
                ref={(node) => { this.modal = node }}
                onKeyDown={this.handleUpdateFocus}
            >
              <div className={this.props.classNames.modalVideoBody}>
                <div className={this.props.classNames.modalVideoInner}>
                  <div className={this.props.classNames.modalVideoIframeWrap} style={style}>
                    <button
                        type="button"
                        className={this.props.classNames.modalVideoCloseBtn}
                        aria-label={this.props.aria.dismissBtnMessage}
                        ref={(node) => { this.modalbtn = node }}
                        onKeyDown={this.handleUpdateFocus}
                    />
                    {/* <iframe width='460' height='230' src={this.getVideoUrl(this.props, this.props.videoId)} frameBorder='0' allowFullScreen={this.props.allowFullScreen} tabIndex='-1' /> */}
                    {iframe}
                  </div>
                </div>
              </div>
            </div>)
        }}
      </CSSTransition>
    )
  }
}

ModalVideo.defaultProps = {
  'allowFullScreen': true,
  'animationSpeed': 300,
  'aria': {
    'dismissBtnMessage': 'Close the modal by clicking here',
    'openMessage': 'You just openned the modal video'
  },
  'channel': 'youtube',
  'classNames': {
    'modalVideoEffect': 'modal-video-effect',
    'modalVideo': 'modal-video',
    'modalVideoClose': 'modal-video-close',
    'modalVideoBody': 'modal-video-body',
    'modalVideoInner': 'modal-video-inner',
    'modalVideoIframeWrap': 'modal-video-movie-wrap',
    'modalVideoCloseBtn': 'modal-video-close-btn'
  },
  'isOpen': false,
  'ratio': '16:9',
  'url': '',
  'vimeo': {
    'api': false,
    'autopause': true,
    'autoplay': true,
    'byline': true,
    'callback': null,
    'color': null,
    'height': null,
    'loop': false,
    'maxheight': null,
    'maxwidth': null,
    'player_id': null,
    'portrait': true,
    'title': true,
    'width': null,
    'xhtml': false
  },
  'youku': {
    'autoplay': 1,
    'show_related': 0
  },
  'youtube': {
    'autoplay': 1,
    'cc_load_policy': 1,
    'color': null,
    'controls': 1,
    'disablekb': 0,
    'enablejsapi': 0,
    'end': null,
    'fs': 1,
    'h1': null,
    'iv_load_policy': 1,
    'list': null,
    'listType': null,
    'loop': 0,
    'modestbranding': null,
    'origin': null,
    'playlist': null,
    'playsinline': null,
    'rel': 0,
    'showinfo': 1,
    'start': 0,
    'wmode': 'transparent',
    'theme': 'dark'
  }
}
