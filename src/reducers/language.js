import * as actionTypes from 'actions/actionTypes'

type State = string;
type Action = {
  type: string,
  payload: string,
};

const defaultState = 'en'

/**
 * @inheritDoc
 */
export function language (state: State = defaultState, action: Action) {
  switch (action.type) {
    case actionTypes.UPDATE_LANGUAGE:
      return action.payload
    default:
      return state
  }
}
