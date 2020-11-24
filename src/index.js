import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import WebfontLoader from '@dr-kobros/react-webfont-loader'
import {persistor, store} from 'stores/configureStore'

/*
 * Styles
 * Import Flag Icons Set
 */
import 'flag-icon-css/css/flag-icon.min.css'
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css'
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css'
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import ExternalDashboard from './containers/ExternalDashboard'
import ScrollToTop from 'components/ScrollToTop'

const fontConfig = {
  'custom': {
    'families': ['PingFangSC']
  }
}

ReactDOM.render(
  (
    <Provider store={store}>
      <WebfontLoader config={fontConfig}>
        <PersistGate
            loading={null}
            persistor={persistor}
        >
          <HashRouter>
            <Switch>
              <ScrollToTop>
                <Route
                    path="/"
                    name="ExternalDashboard"
                    component={ExternalDashboard}
                />
              </ScrollToTop>
            </Switch>
          </HashRouter>
        </PersistGate>
      </WebfontLoader>
    </Provider>
  ), document.getElementById('root')
)
