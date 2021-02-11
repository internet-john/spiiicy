import { ACTION_TYPES } from "../actions";
import { randomSelectIdea } from "../actions/actionCreators";

const initialState = {
  ideaList: [],
  userSelectedIdea: null,
  randomSelectedIdea: null,
  isEditMode: false,
  isTaskOptionsDrawerVisible: false,
};

const insertListItem = (list, action) => {
  let newList = list.slice();
  newList.splice(action.index, 0, action.idea);

  return newList;
};

const removeListItem = (list, ideaId) =>
  list.filter((item, index) => item.id !== ideaId);

const updateListItem = (list, ideaObj) => {
  return list.map((item, index) => {
    if (item.id !== ideaObj.id) {
      return item;
    }

    return {
      ...item,
      ...ideaObj,
    };
  });
};

/* 

    TODO: MAKE AS SAGA ACTION

*/
const determineEligibleList = (ideaList, randomSelectedIdea) =>
  ideaList.slice().filter((entry) => entry.id !== randomSelectedIdea.id);

const selectRandomIdea = (ideaList, randomSelectedIdea) => {
  let eligibleList = ideaList.slice();
  if (randomSelectedIdea)
    eligibleList = determineEligibleList(ideaList, randomSelectedIdea);
  return eligibleList[
    Math.floor(Math.random() * Math.floor(eligibleList.length))
  ];
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
        isTaskOptionsDrawerVisible: !state.isTaskOptionsDrawerVisible,
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
      return {
        ...state,
        isEditMode: !state.isEditMode,
        isTaskOptionsDrawerVisible: !state.isTaskOptionsDrawerVisible,
        // userSelectedIdea: state.ideaList
        //   .slice()
        //   .filter((item) => item.id === action.id)[0],
      };
    }
    case ACTION_TYPES.COMMIT_EDIT_IDEA: {
      return {
        ...state,
        isEditMode: !state.isEditMode,
        ideaList: updateListItem(state.ideaList, action.ideaObj),
      };
    }
    case ACTION_TYPES.DELETE_IDEA: {
      return {
        ...state,
        ideaList: removeListItem(state.ideaList, action.id),
        userSelectedIdea: null,
        isTaskOptionsDrawerVisible: !state.isTaskOptionsDrawerVisible,
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
        userSelectedIdea: null,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
