
import React, {Component} from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// import {Container} from 'reactstrap'
import {connect} from 'react-redux'
import * as actionTypes from 'actions/actionTypes'
// Import Header from '../../components/Header/';
// import Sidebar from '../../components/Sidebar/'
// import Breadcrumb from '../../components/Breadcrumb/'
// import Aside from '../../components/Aside/'

// Page
import Home from 'views/Home/'
import About from 'views/About'
import JobDescription from 'views/JobDescription'
import Career from 'views/Career'
import Contact from 'views/Contact'
import News from 'views/News'
import _404 from 'views/404'
import Impact from 'views/Impact'
// Components
import Header from './components/Header'

import {
  getAboutHeading,
  getAboutWasshaValues,
  getAboutOurPartners,
  getFooter,
  getHome,
  getJobDescription,
  getOptionForm,
  getImpact
} from 'actions'
import translations from 'config/translations'

class ExternalDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      "language": "en"
    }
  }

  componentWillMount () {
    const {
      dispatch,
      language
    } = this.props
    translations.setLanguage(language)
    dispatch(getAboutHeading())
    dispatch(getFooter())
    dispatch(getHome())
    dispatch(getAboutWasshaValues())
    dispatch(getAboutOurPartners())
    // dispatch(getCareerJP())
    // dispatch(getCareerTanzania())
    dispatch(getJobDescription())
    dispatch(getOptionForm())
    dispatch(getImpact())
  }

  render () {
    return (
      <div className="">
        <Header
            changeLanguage={(lang) => this.changeLanguage(lang)}
            {...this.props}
        />
        <div className="content">
          <Switch>
            {/* <Route path="/dashboard" name="Dashboard" component={Dashboard}/> */}
            {/* <Redirect from="/" to="/dashboard"/> */}
            <Route exact path="/" name="Home" component={Home} />
            <Route component={About} exact name="About" path="/about" />
            <Route component={JobDescription} exact name="JobDescription" path="/job-description/:id" />
            <Route component={Career} exact name="Career" path="/careers" />
            <Route component={Contact} exact name="Contact" path="/contact" />
            <Route component={News} exact name="News" path="/news" />
            <Route component={Impact} exact name="Impact" path="/impact" />
            <Route component={_404} exact name="404" path="/404" />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }

  changeLanguage (lang) {
    const {dispatch} = this.props
    dispatch({
      'type': actionTypes.UPDATE_LANGUAGE,
      'payload': lang
    })
    this.setState({
      "language": lang
    })
  }
}

/**
 * Map state to props
 * @param {Object} state State in External Dashboard
 * @returns {Object} Return language and externalDashboard CMS
 */
function mapStateToProps (state) {
  const {
    externalDashboardCMS,
    language,
    externalCMS
  } = state

  return {
    externalDashboardCMS,
    language,
    externalCMS
  }
}

export default connect(mapStateToProps)(ExternalDashboard)
