import { call, put, select, takeLatest } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ACTION_CREATORS, ACTION_TYPES } from "../actions";

function* createIdea({ idea }) {
  yield put(ACTION_CREATORS.toggleIsLoading());

  try {
    const storageKey = JSON.stringify(idea.id);
    const jsonIdea = JSON.stringify(idea);
    yield call([AsyncStorage, "setItem"], storageKey, jsonIdea);
  } catch (e) {
    console.log(e);
  }
}

function* editIdea({ idea }) {
  yield put(ACTION_CREATORS.toggleIsLoading());

  try {
    const storageKey = JSON.stringify(idea.id);
    const updatedIdea = JSON.stringify({ ...idea, value: idea.value });

    yield call([AsyncStorage, "mergeItem"], storageKey, updatedIdea);
    yield put(ACTION_CREATORS.toggleIsLoading());
  } catch (e) {
    console.log(e);
  }
}

function* deleteIdea({ id }) {
  yield put(ACTION_CREATORS.toggleIsLoading());

  try {
    const storageKey = JSON.stringify(id);

    yield call([AsyncStorage, "removeItem"], storageKey);
    yield put(ACTION_CREATORS.toggleIsLoading());
  } catch (e) {
    console.log(e);
  }
}

function* fetchIdeas() {
  yield put(ACTION_CREATORS.toggleIsLoading());

  let keys;
  let ideas;
  let parsedIdeas;

  try {
    keys = yield call([AsyncStorage, "getAllKeys"]);
    if (keys && keys.length)
      ideas = yield call([AsyncStorage, "multiGet"], keys);
    if (ideas && ideas.length)
      parsedIdeas = ideas.map((idea) => JSON.parse(idea[1]));

    yield put(ACTION_CREATORS.toggleIsLoading());
    yield put(ACTION_CREATORS.fetchIdeasSuccess(parsedIdeas));
  } catch (e) {
    console.log(e);
    yield put(ACTION_CREATORS.fetchIdeasFailure());
  }
}

const ideaStoreSaga = [
  takeLatest(ACTION_TYPES.CREATE_IDEA, createIdea),
  takeLatest(ACTION_TYPES.COMMIT_EDIT_IDEA, editIdea),
  takeLatest(ACTION_TYPES.DELETE_IDEA, deleteIdea),
  takeLatest(ACTION_TYPES.FETCH_IDEAS, fetchIdeas),
];

export default ideaStoreSaga;
