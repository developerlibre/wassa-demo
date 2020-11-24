
import * as actionTypes from 'actions/actionTypes'

type State = {
  ourMission: string,
  headquarters: Array,
  facebook: string,
  twitter: string,
  instagram: string,
  linkedin: string,
  homeHeading: string,
  impact: Object,
  about: string,
  news: Array,
  wasshaValues: Array,
  ourPartners: Array,
  jobDetail: Object,
  careerJP: Object,
  careerTanzania: Object
};

type Action = {
  type: string,
  payload: any,
};

const defaultState = {
  'ourMission': '',
  'headquarters': [],
  'facebook': '',
  'twitter': '',
  'instagram': '',
  'linkedin': '',
  'homeHeading': '',
  'impact': {},
  'about': '',
  'news': [],
  'wasshaValues': [],
  'ourPartners': [],
  'jobDetail': {},
  'careerJP': {},
  'careerTanzania': {}
}

/**
 * Key for external dashboard cms in reducer
 * @param {Object} state State For object
 * @param {Object} action List acction
 * @returns {Object} State after fitter
 */
export function externalDashboardCMS (state: State = defaultState, action: Action): State {
  switch (action.type) {
    case actionTypes.FETCH_ABOUT_HEADING_SUCCESS: {
      return {
        ...state,
        'ourMission': action.payload.ourMission
      }
    }
    case actionTypes.FETCH_FOOTER_SUCCESS: {
      return {
        ...state,
        'headquarters': [...action.payload.headquarters],
        'facebook': action.payload.facebook,
        'twitter': action.payload.twitter,
        'instagram': action.payload.instagram,
        'linkedin': action.payload.linkedin
      }
    }
    case actionTypes.FETCH_HOME_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }
    case actionTypes.FETCH_ABOUT_WASSHA_VALUES_SUCCESS: {
      return {
        ...state,
        'wasshaValues': action.payload
      }
    }
    case actionTypes.FETCH_ABOUT_OUR_PARTNERS_SUCCESS: {
      return {
        ...state,
        'ourPartners': action.payload
      }
    }
    case actionTypes.FETCH_CAREER_JP_SUCCESS: {
      return {
        ...state,
        'careerJP': action.payload
      }
    }
    case actionTypes.FETCH_CAREER_TANZANIA_SUCCESS: {
      return {
        ...state,
        'careerTanzania': action.payload
      }
    }
    case actionTypes.FETCH_JOB_DESCRIPTION_SUCCESS: {
      return {
        ...state,
        'jobDetail': action.payload
      }
    }
    default: {
      return state
    }
  }
}
