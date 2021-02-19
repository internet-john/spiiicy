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

export { insertListItem, removeListItem, updateListItem, selectRandomIdea };
