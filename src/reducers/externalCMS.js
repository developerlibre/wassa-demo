
import * as actionTypes from 'actions/actionTypes'
import translations from 'config/translations'

type State = {
  optionForm: Array
};

type Action = {
  type: string,
  payload: any,
};

const defaultState = {
  'option': []
}

/**
 * Key for external dashboard cms in reducer
 * @param {Object} state State For object
 * @param {Object} action List acction
 * @returns {Object} State after fitter
 */
export function externalCMS (state: State = defaultState, action: Action): State {
  switch (action.type) {
    case actionTypes.FETCH_CONTACT_FORM_SUCCESS: {
      return {
        ...state,
        'option': [
          {
            "option": translations.contact_pleaseChooseDepartment,
            "value": ''
          },
          ...action.payload
        ]
      }
    }
    default: {
      return state
    }
  }
}
