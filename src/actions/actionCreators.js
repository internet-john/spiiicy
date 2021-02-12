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

const commitEditIdea = (idea) => ({
  type: ACTION_TYPES.COMMIT_EDIT_IDEA,
  idea,
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

const toggleIsLoading = () => ({
  type: ACTION_TYPES.TOGGLE_IS_LOADING,
});

const fetchIdeas = () => ({
  type: ACTION_TYPES.FETCH_IDEAS,
});

const fetchIdeasSuccess = (ideas) => ({
  type: ACTION_TYPES.FETCH_IDEAS_SUCCESS,
  ideas,
});

const fetchIdeasFailure = () => ({
  type: ACTION_TYPES.FETCH_IDEAS_FAILURE,
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
  toggleIsLoading,
  fetchIdeas,
  fetchIdeasSuccess,
  fetchIdeasFailure,
};
