const initialState = {
  items: []
};

const Shop = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_STORE':
      return {
        ...state,
        items: [...state.items, action.item]
      }
    default:
      return state;
  }
}

export default Shop;
