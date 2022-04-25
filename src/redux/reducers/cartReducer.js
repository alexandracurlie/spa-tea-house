// TODO: create totalItems for cart badge in header

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        items: [...state.items, action.payload],
      };

    case "CLEAR_CART":
      return {
        items: [],
        totalCartCost: 0,
      }

    case "DECREASE": {

      const currentState = [...state.items]
      const index = currentState.findIndex(item => item.id === action.payload)
      currentState.splice(index, 1)

      return {
          ...state,
          items: currentState,
        }
    }

    case "REMOVE_ITEM": {
      const items = state.items.filter(item => item.id !== action.payload)

      return {
        ...state,
        items,
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
