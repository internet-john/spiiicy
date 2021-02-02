import {
  CREATE_IDEA,
  EDIT_IDEA,
  DELETE_IDEA,
  RANDOM_SELECT_IDEA,
  TOGGLE_TASK_OPTIONS_DRAWER,
  SELECT_IDEA,
} from "./constants";

const createIdea = (id, idx) => ({
  type: CREATE_IDEA,
  id,
  idx,
});

const userSelectIdea = (id, idx) => ({
  type: SELECT_IDEA,
  id,
  idx,
});

const randomSelectIdea = (id) => ({
  type: RANDOM_SELECT_IDEA,
  id,
});

const editIdea = (id, idx) => ({
  type: EDIT_IDEA,
  id,
  idx,
});

const deleteIdea = (id, idx) => ({
  type: DELETE_IDEA,
  id,
  idx,
});

const toggleTaskOptionsDrawer = () => ({
  type: TOGGLE_TASK_OPTIONS_DRAWER,
});

export {
  createIdea,
  userSelectIdea,
  randomSelectIdea,
  editIdea,
  deleteIdea,
  toggleTaskOptionsDrawer,
};
