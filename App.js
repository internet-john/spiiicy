import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import Spiiicy from "./src/components/Spiiicy";
import { actionCreators } from "./src/actions";
import rootReducer from "./src/reducers/index";
import rootSaga from "./src/sagas/index";

export default function App() {
  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Spiiicy />
    </Provider>
  );
}
