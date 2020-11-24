
import React from 'react'
import translations from 'config/translations'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      'menuOpened': false,
      'window_width': 1200,
      'language': 'en'
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.handleOnClickMobileMenu = this.handleOnClickMobileMenu.bind(this)
  }

  componentWillMount () {
    this.setState({
      'language': this.props.language
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions)
    this.updateDimensions()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions () {
    this.setState({
      'window_width': window.outerWidth
    })
  }

  handleToggleMenu () {
    this.setState({'menuOpened': !this.state.menuOpened})
  }

  handleChangeLanguage (lang) {
    translations.setLanguage(lang)
    this.props.changeLanguage(lang)
    this.setState({
      'language': lang
    })
  }

  handleOnClickMobileMenu () {
    if (this.state.menuOpened) this.handleToggleMenu()
  }

  /*
   * Render an item on menu
   * @param {String} title Menu title
   * @param {String} pathname string to define active status
   * @param {Object} link URL
   * @return {Object} Node
   */
  renderMenuItem (title, pathname, link) {
    let copyPathname = this.props.location.pathname
    if (copyPathname.indexOf('/job-description') >= 0) {
      copyPathname = '/careers'
    }
    if (copyPathname.indexOf('/404') >= 0) {
      copyPathname = '/'
    }
    return (
      <li
          className={copyPathname === pathname ? 'active' : ''}
      >
        <a
            href={link}
            onClick={this.handleOnClickMobileMenu}
        >
          {title}
        </a>
      </li>
    )
  }

  render () {
    return (
      <header id="header">
        <div id="hdr-wrapper">
          <div className="container hdr">
            <div className="tbl">
              <div className="tbl-row">
                <div className="tbl-cell hdr-logo">
                  <a href="/#">
                    <img src="img/external_dashboard/home/logo.png" alt="" />
                  </a>
                </div>
                <div className="tbl-cell hdr-menu">
                  <ul className={`menu ${this.state.menuOpened ? 'menu-opened' : ''}`}>
                    {this.renderMenuItem(translations.menu_home, '/', /#/)}
                    {this.renderMenuItem(translations.menu_about, '/about', '/#/about')}
                    {this.renderMenuItem(translations.menu_impact, '/impact', '/#/impact')}
                    {this.renderMenuItem(translations.menu_business, '/business', '/#/business')}
                    {this.renderMenuItem(translations.menu_news, '/news', '/#/news')}
                    {this.renderMenuItem(translations.menu_careers, '/careers', '/#/careers')}
                    {this.renderMenuItem(translations.menu_contact, '/contact', '/#/contact')}
                    <li className="choose-language">
                      <div className="language-wrapper">
                        <div
                            className={`language-item language-left-item ${this.state.language === 'en' ? 'language-active' : ''}`}
                            onClick={() => this.handleChangeLanguage('en')}
                        >
                          {translations.language_en}
                        </div>
                        <div
                            className={`language-item language-right-item ${this.state.language === 'jp' ? 'language-active' : ''}`}
                            onClick={() => this.handleChangeLanguage('jp')}
                        >
                          {translations.language_jp}
                        </div>
                      </div>

                    </li>
                    <li className="mobile-menu-close" onClick={this.handleToggleMenu}>
                      <img
                          className="fa"
                          src="img/external_dashboard/home/menu-close@3x.png"
                          alt="menu-close"
                      />
                    </li>
                  </ul>
                  <div id="menu-bar" onClick={this.handleToggleMenu}>
                    <a className="open-menu-mobile">
                      {/* <i className="fa fa-bars"></i> */}
                      <img src="img/external_dashboard/home/hamburger-menu@3x.png" alt="menu" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
