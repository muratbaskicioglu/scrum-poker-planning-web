/**
 * Create the store with dynamic reducers
 */

import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import { InjectedStore, ApplicationRootState } from 'types';
import { History } from 'history';
import epics from './epics';

import { createEpicMiddleware } from 'redux-observable';

export default function configureStore(
  initialState: ApplicationRootState | {} = {},
  history: History,
) {
  const epicMiddleware = createEpicMiddleware();

  const middlewares = [routerMiddleware(history), epicMiddleware];
  let enhancer = applyMiddleware(...middlewares);

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(enhancer);
  }

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__)
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state

  const store = createStore(createReducer(), initialState, enhancer);

  // Extensions
  epicMiddleware.run(epics as any);
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
