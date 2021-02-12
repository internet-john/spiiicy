import { put, select, takeLatest } from "redux-saga/effects";
import { ACTION_CREATORS, ACTION_TYPES } from "../actions";

function* selectIdea() {
  yield put(ACTION_CREATORS.toggleTaskOptionsDrawer());
}

function* editIdea() {
  yield put(ACTION_CREATORS.toggleEditMode());
  yield put(ACTION_CREATORS.toggleTaskOptionsDrawer());
}

function* commitEditIdea() {
  yield put(ACTION_CREATORS.toggleEditMode());
}

function* deleteIdea() {
  yield put(ACTION_CREATORS.toggleTaskOptionsDrawer());
}

const appSaga = [
  takeLatest(ACTION_TYPES.SELECT_IDEA, selectIdea),
  takeLatest(ACTION_TYPES.EDIT_IDEA, editIdea),
  takeLatest(ACTION_TYPES.COMMIT_EDIT_IDEA, commitEditIdea),
  takeLatest(ACTION_TYPES.DELETE_IDEA, deleteIdea),
];

export default appSaga;
