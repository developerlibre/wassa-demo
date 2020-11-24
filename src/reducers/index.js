
import {combineReducers} from 'redux'

//
import {language} from './language'
import {externalDashboardCMS} from './externalDashboardCMS'
import {externalCMS} from './externalCMS'
import {impact} from './impact'

const rootReducer = combineReducers({
  language,
  externalDashboardCMS,
  externalCMS,
  impact
})

export default rootReducer
