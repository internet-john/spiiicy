import { all } from "redux-saga/effects";

import ideaStoreSaga from "./ideaStoreSaga";
import widgetToggleSaga from "./widgetToggleSaga";

function* rootSaga() {
  yield all([...ideaStoreSaga, ...widgetToggleSaga]);
}

export default rootSaga;
