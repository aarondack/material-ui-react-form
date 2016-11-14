export const ADD_ITEM_TO_STORE = 'ADD_ITEM_TO_STORE';

export function addItemToStore(item) {
  return {
    type: ADD_ITEM_TO_STORE,
    item
  }
};
