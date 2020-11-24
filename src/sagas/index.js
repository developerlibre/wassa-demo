
import {
  all,
  fork
} from 'redux-saga/effects'

import {
  watchForCMSFetch
} from './cms'

/**
 * Root for saga
 * @returns {Boolean} Watch cms fetch
 */
function * root () {
  yield all([fork(watchForCMSFetch)])
  return true
}

const rootSaga = root

export default rootSaga
