
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import * as api from 'apis'
import * as actionTypes from 'actions/actionTypes'

/**
 * @inheritDoc
 */
function * getAboutHeading (params) {
  try {
    const res = yield call(api.getAboutHeading, params.payload)

    yield put({
      'type': actionTypes.FETCH_ABOUT_HEADING_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getFooter (params) {
  try {
    const res = yield call(api.getFooter, params.payload)

    yield put({
      'type': actionTypes.FETCH_FOOTER_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log('footer error', error)
  }
}

/**
 * @inheritDoc
 */
function * getHome (params) {
  try {
    const res = yield call(api.getHome, params.payload)

    yield put({
      'type': actionTypes.FETCH_HOME_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log('home error', error)
  }
}

/**
 * @inheritDoc
 */
function * getAboutWasshaValues (params) {
  try {
    const res = yield call(api.getAboutWasshaValues, params.payload)

    yield put({
      'type': actionTypes.FETCH_ABOUT_WASSHA_VALUES_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getAboutOurPartners (params) {
  try {
    const res = yield call(api.getAboutOurPartners, params.payload)

    yield put({
      'type': actionTypes.FETCH_ABOUT_OUR_PARTNERS_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getCareerJP (params) {
  try {
    const res = yield call(api.getCareerJP, params.payload)

    yield put({
      'type': actionTypes.FETCH_CAREER_JP_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getCareerTanzania (params) {
  try {
    const res = yield call(api.getCareerTanzania, params.payload)

    yield put({
      'type': actionTypes.FETCH_CAREER_TANZANIA_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getJobDescription (params) {
  try {
    const res = yield call(api.getJobDescription, params.payload)

    yield put({
      'type': actionTypes.FETCH_JOB_DESCRIPTION_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getOptionForm (params) {
  try {
    const res = yield call(api.getOptionForm, params.payload)

    yield put({
      'type': actionTypes.FETCH_CONTACT_FORM_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * getImpact (params) {
  try {
    const res = yield call(api.getImpact, params.payload)

    yield put({
      'type': actionTypes.FETCH_IMPACT_SUCCESS,
      'payload': res.response
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @inheritDoc
 */
function * watchForCMSList () {
  yield takeEvery(actionTypes.FETCH_ABOUT_HEADING, getAboutHeading)
  yield takeEvery(actionTypes.FETCH_FOOTER, getFooter)
  yield takeEvery(actionTypes.FETCH_HOME, getHome)
  yield takeEvery(actionTypes.FETCH_ABOUT_WASSHA_VALUES, getAboutWasshaValues)
  yield takeEvery(actionTypes.FETCH_ABOUT_OUR_PARTNERS, getAboutOurPartners)
  yield takeEvery(actionTypes.FETCH_CAREER_JP, getCareerJP)
  yield takeEvery(actionTypes.FETCH_CAREER_TANZANIA, getCareerTanzania)
  yield takeEvery(actionTypes.FETCH_JOB_DESCRIPTION, getJobDescription)
  yield takeEvery(actionTypes.FETCH_CONTACT_FORM, getOptionForm)
  yield takeEvery(actionTypes.FETCH_IMPACT, getImpact)
}

const watchForCMSFetch = watchForCMSList

module.exports = {
  watchForCMSFetch
}
