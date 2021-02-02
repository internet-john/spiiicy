import { ACTION_CREATORS, ACTION_TYPES } from "../actions";
const initialState = {
  ideaList: [],
  userSelectedIdea: null,
  randomSelectedIdea: null,
};

const insertListItem = (list, action) => [
  ...list.slice(0, action.index),
  action.item,
  ...array.slice(action.index),
];

const removeListItem = (list, action) =>
  array.filter((item, index) => index !== action.index);

const updateListItem = (list, action) => {
  return list.map((item, index) => {
    if (index !== action.index) {
      return item;
    }

    return {
      ...item,
      ...action.item,
    };
  });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_IDEA: {
      const currIdeas = state.ideas.slice();

      return { ...state, ideaList: [...currIdeas, action.idea] };
    }
  }
};
