import { ACTION_TYPES } from "../actions";
import {
  insertListItem,
  removeListItem,
  updateListItem,
  selectRandomIdea,
} from "./utils";

const initialState = {
  ideaList: [],
  userSelectedIdea: null,
  randomSelectedIdea: null,
  isEditMode: false,
  isTaskOptionsDrawerVisible: false,
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_IDEA: {
      return { ...state, ideaList: insertListItem(state.ideaList, action) };
    }
    case ACTION_TYPES.SELECT_IDEA: {
      return {
        ...state,
        userSelectedIdea: action.id,
      };
    }
    case ACTION_TYPES.RANDOM_SELECT_IDEA: {
      return {
        ...state,
        randomSelectedIdea: selectRandomIdea(
          state.ideaList,
          state.randomSelectedIdea
        ),
      };
    }
    case ACTION_TYPES.EDIT_IDEA: {
      return state;
    }
    case ACTION_TYPES.COMMIT_EDIT_IDEA: {
      return {
        ...state,
        ideaList: updateListItem(state.ideaList, action.idea),
      };
    }
    case ACTION_TYPES.DELETE_IDEA: {
      return {
        ...state,
        ideaList: removeListItem(state.ideaList, action.id),
        userSelectedIdea: null,
      };
    }
    case ACTION_TYPES.TOGGLE_TASK_OPTIONS_DRAWER: {
      return {
        ...state,
        isTaskOptionsDrawerVisible: !state.isTaskOptionsDrawerVisible,
      };
    }
    case ACTION_TYPES.TOGGLE_EDIT_MODE: {
      return {
        ...state,
        isEditMode: !state.isEditMode,
      };
    }
    case ACTION_TYPES.TOGGLE_IS_LOADING: {
      return { ...state, isLoading: !state.isLoading };
    }
    case ACTION_TYPES.FETCH_IDEAS: {
      return state;
    }
    case ACTION_TYPES.FETCH_IDEAS_SUCCESS: {
      return {
        ...state,
        ideaList: action.ideas ? action.ideas : [],
      };
    }
    case ACTION_TYPES.FETCH_IDEAS_FAILURE: {
      return {
        ...state,
        error: "Ooops",
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
