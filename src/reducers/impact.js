import * as actionTypes from 'actions/actionTypes'

type State = {
  textHeading1: string,
  textHeading1: string,
  accessibleEnergy: Object,
  cleanEnergy: Object,
  localOpportunities: Object
};

type Action = {
  type: string,
  payload: any,
};

const defaultState = {
  'textHeading1': '',
  'textHeading2': '',
  'accessibleEnergy': {},
  'cleanEnergy': {},
  'localOpportunities': {}
}

/**
 * Key for impact in reducer
 * @param {Object} state State For object
 * @param {Object} action List acction
 * @returns {Object} State after fitter
 */
export function impact (state: State = defaultState, action: Action): State {
  switch (action.type) {
    case actionTypes.FETCH_IMPACT_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
