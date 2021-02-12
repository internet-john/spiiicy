import { all } from "redux-saga/effects";

import appSaga from "./appSaga";

function* rootSaga() {
  yield all([...appSaga]);
}

export default rootSaga;
