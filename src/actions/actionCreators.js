import * as ACTION_TYPES from "./constants";

const createIdea = ({ idea, idx }) => ({
  type: ACTION_TYPES.CREATE_IDEA,
  idea,
  idx,
});

const userSelectIdea = (id) => ({
  type: ACTION_TYPES.SELECT_IDEA,
  id,
});

const randomSelectIdea = () => ({
  type: ACTION_TYPES.RANDOM_SELECT_IDEA,
});

const editIdea = (id) => ({
  type: ACTION_TYPES.EDIT_IDEA,
  id,
});

const commitEditIdea = (ideaObj) => ({
  type: ACTION_TYPES.COMMIT_EDIT_IDEA,
  ideaObj,
});

const deleteIdea = (id) => ({
  type: ACTION_TYPES.DELETE_IDEA,
  id,
});

const toggleTaskOptionsDrawer = () => ({
  type: ACTION_TYPES.TOGGLE_TASK_OPTIONS_DRAWER,
});

const toggleEditMode = () => ({
  type: ACTION_TYPES.TOGGLE_EDIT_MODE,
});

export {
  createIdea,
  userSelectIdea,
  randomSelectIdea,
  editIdea,
  commitEditIdea,
  deleteIdea,
  toggleTaskOptionsDrawer,
  toggleEditMode,
};
