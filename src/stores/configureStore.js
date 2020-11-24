
import 'regenerator-runtime/runtime'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//
import rootReducer from 'reducers'
import rootSaga from 'sagas'

const persistConfig = {
  'key': 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Async function configureStore(onComplete: ?() => void) {
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store)

// Store.runSaga = sagaMiddleware.run;
sagaMiddleware.run(rootSaga)
store.close = () => store.dispatch(END)

/*
 * Return {
 *  store,
 *  persistor
 * }
 */

module.exports = {
  store,
  persistor
}
