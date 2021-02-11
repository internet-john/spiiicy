import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import Spiiicy from "./src/components/Spiiicy";
import { actionCreators } from "./src/actions";
import rootReducer from "./src/reducers/index";

export default function App() {
  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });

  const store = createStore(rootReducer, composeEnhancers());

  return (
    <Provider store={store}>
      <Spiiicy />
    </Provider>
  );
}
