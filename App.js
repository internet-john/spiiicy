import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import Spiiicy from "./src/components/Spiiicy";
import { ACTION_CREATORS } from "./src/actions";
import rootReducer from "./src/reducers/index";
import rootSaga from "./src/sagas/index";

export default function App() {
  const composeEnhancers = composeWithDevTools({
    ACTION_CREATORS,
    trace: true,
    traceLimit: 25,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  store.dispatch(ACTION_CREATORS.fetchIdeas());

  return (
    <Provider store={store}>
      <Spiiicy />
    </Provider>
  );
}
