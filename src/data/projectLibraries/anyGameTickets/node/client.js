const code = `import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { renderRoutes } from 'react-router-config';
import createSagaMiddleware from 'redux-saga';
import { ApolloProvider } from 'react-apollo';
import deepmerge from 'deepmerge';
import Provider from '../contexts/api/provider';

import { client } from '../sagas/apollo';
import reducers from '../reducers';
import routes from '../routes';
import rootSaga from '../sagas';
import { loadState } from '../lib/localState';


// Starting point for the client application

const sagaMiddleware = createSagaMiddleware();
const localStorage = loadState();
const windowState = window.INITIAL_STATE;
delete windowState.cart;
delete windowState.ticketListingFilters;

const persistedState = deepmerge(windowState, localStorage);
const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)),
);

// store.subscribe(throttle(() => {
//   saveState({
//     cart: store.getState().cart,
//     globalFilters: store.getState().globalFilters,
//   });
// }, 1000));

sagaMiddleware.run(rootSaga);

hydrate(
  <Provider>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>{renderRoutes(routes)}</div>
        </BrowserRouter>
      </ApolloProvider>
    </ReduxProvider>
  </Provider>,
  document.getElementById('app'),
);`;

const links = [];

export default {
  name: 'client.js',
  label: 'client.js',
  code,
  links,
};
